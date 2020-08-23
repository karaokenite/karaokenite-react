/*
Copy & pasted version of the server from what's on Glitch.
This should work for the networked aframe server if you run it with node.
It's staying here for a bit so we can validate its bugs aren't made *worse* in the new server.
*/

// Load required modules
const http = require("http"); // http server core module
const express = require("express"); // web framework external module

// Set process name
process.title = "networked-aframe-server";

const port = 3002;

// Setup and configure Express http server.
const app = express();
app.use(express.static("public"));

// Start Express http server
const webServer = http.createServer(app);
const io = require("socket.io")(webServer);

const rooms = new Map();

io.on("connection", (socket) => {
  let currentRoom = null;

  socket.on("joinRoom", (data) => {
    const { room } = data;
    console.log(socket.id, "joining", room);

    if (!rooms[room]) {
      rooms[room] = {
        name: room,
        occupants: {},
      };
    }

    const joinedTime = Date.now();
    rooms[room].occupants[socket.id] = { joinedTime };
    currentRoom = room;

    socket.join(room);

    socket.emit("connectSuccess", { joinedTime });
    const occupants = rooms[room].occupants;
    io.in(currentRoom).emit("occupantsChanged", { occupants });
  });

  socket.on("sendUsername", ({ username }) => {
    if (!rooms[currentRoom]) {
      return;
    }

    const occupants = rooms[currentRoom].occupants;
    occupants[socket.id].username = username;
    io.in(currentRoom).emit("peopleChanged", {
      people: Object.entries(occupants).map(([id, data]) => {
        return { id, ...data };
      }),
    });
  });

  socket.on("send", (data) => {
    console.log("SENDING!", data);
    io.to(data.to).emit("send", data);
  });

  socket.on("broadcast", (data) => {
    socket.to(currentRoom).broadcast.emit("broadcast", data);
  });

  socket.on("disconnect", () => {
    if (rooms[currentRoom]) {
      delete rooms[currentRoom].occupants[socket.id];
      const occupants = rooms[currentRoom].occupants;
      socket.to(currentRoom).broadcast.emit("occupantsChanged", { occupants });

      if (Object.keys(occupants).length === 0) {
        delete rooms[currentRoom];
      }
    }
  });
});

webServer.listen(port, () => {
  console.log("listening on :" + port);
});
