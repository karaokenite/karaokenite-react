// Load required modules
const http = require("http"); // http server core module
const express = require("express"); // web framework external module

// Set process name
process.title = "networked-aframe-server";

// Get port or default to 8080
const port = process.env.PORT || 8080;

// Setup and configure Express http server.
const app = express();
app.use(express.static("public"));

// Start Express http server
const webServer = http.createServer(app);
const io = require("socket.io")(webServer);

const rooms = {};

io.on("connection", (socket) => {
  let curRoom = null;

  function initRoom(room) {
    if (!room) return;
    if (!rooms[room]) {
      rooms[room] = {
        name: room,
        occupants: {},
        sockets: {},
        usernames: new Set(),
        clients: 0,
      };
    }
    return rooms[room];
  }

  function joinRoom(input) {
    let { room: roomName, username } = input;
    const room = initRoom(roomName);
    if (!room) return;
    curRoom = room;

    if (username && !room.usernames.has(username)) {
      room.usernames.add(username);
    }

    if (username) {
      room.sockets[socket.id] = { username, time: Date.now() };
      room.clients = room.usernames.size;
    }

    room.occupants[socket.id] = Date.now();

    return room;
  }

  function broadCastRoomInfo(room) {
    if (!room) return;

    socket.join(room.name);

    socket.emit("connectSuccess", { joinedTime: room.occupants[socket.id] });

    io.in(room.name).emit("occupantsChanged", { occupants: room.occupants });
    socket
      .to(curRoom.name)
      .broadcast.emit("occupants", { occupants: room.occupants });

    socket.to(curRoom.name).broadcast.emit("newClientConnect", room.clients);
    socket.to(curRoom.name).broadcast.emit("sendAllUsernames", {
      usernames: Array.from(curRoom.usernames),
    });
  }

  broadCastRoomInfo(curRoom);

  socket.on("joinRoom", (data) => {
    curRoom = joinRoom(data);
    broadCastRoomInfo(curRoom);

    socket.to(curRoom.name).broadcast.emit("sendRoomName", curRoom);
  });

  socket.on("send", (data) => {
    io.to(data.to).emit("send", data);
  });

  socket.on("broadcast", (data) => {
    socket.to(curRoom).broadcast.emit("broadcast", data);
  });

  socket.on("sendUsername", function (data) {
    const room = joinRoom(data);
    io.sockets.emit("sendUsername", data);

    broadCastRoomInfo(room);
  });

  function leaveRoom(socketId) {
    if (!curRoom) return;

    if (curRoom.sockets[socketId]) {
      const { username } = curRoom.sockets[socketId];
      if (
        Object.values(curRoom.sockets).filter((s) => s.username === username)
          .length === 1
      ) {
        curRoom.usernames.delete(username);
      }
      curRoom.clients = curRoom.usernames.size;
      delete curRoom.sockets[socketId];
    } else {
      delete curRoom.occupants[socketId];
    }
  }

  socket.on("disconnect", () => {
    leaveRoom(socket.id);
    if (!curRoom) return;

    socket
      .to(curRoom.name)
      .broadcast.emit("occupantsChanged", { occupants: curRoom.occupants });

    socket.broadcast.emit("occupants", { occupants: curRoom.occupants });

    // decrease the number of people in the room display
    socket
      .to(curRoom.name)
      .broadcast.emit("newClientDisconnect", curRoom.clients);

    socket.to(curRoom.name).broadcast.emit("sendAllUsernamesDisconnect", {
      usernames: Array.from(curRoom.usernames),
    });
    broadCastRoomInfo(curRoom); /*TEST*/
  });
});

webServer.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});
