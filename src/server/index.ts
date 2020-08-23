import http from "http";
import Koa from "koa";
import socketio from 'socket.io';

import { RoomEvent } from "@data/events";
import { socketPort } from "@data/ports";
import { BroadcastData, JoinRoomData, PersonId, SendData, SetUsernameData, RoomPerson } from "@data/types";

import { log } from "./logging";
import { RoomsStore } from "./RoomsStore";

const koa = new Koa();
const server = http.createServer(koa.callback());
const io = socketio(server);
const roomsStore = new RoomsStore();

io.on(RoomEvent.Connection, (socket) => {
    const personId = socket.id as PersonId;

    socket.on(RoomEvent.JoinRoom, ({ room: roomName }: JoinRoomData) => {
        log.connection(`Person '${personId}' joining room '${roomName}'.`);

        const person: RoomPerson = {
            id: personId,
            joinedTime: Date.now(),
        };
        const room = roomsStore.join(roomName, person);

        socket.join(roomName);
        socket.emit(RoomEvent.ConnectSuccess, person);

        io.in(roomName).emit(RoomEvent.OccupantsChanged, { occupants: Object.fromEntries(room.occupants) });

        socket.on(RoomEvent.UsernameSet, ({ username }: SetUsernameData) => {
            log.connection(`Person '${personId}' in room '${room.name}' setting username to '${username}'.`)
            person.username = username;
            io.in(room.name).emit(RoomEvent.OccupantsUpdated, { occupants: Array.from(room.occupants.values()) });
        })

        socket.on(RoomEvent.Send, (data: SendData) => {
            io.to(data.to).emit(RoomEvent.Send, data);
        });

        socket.on(RoomEvent.Broadcast, (data: BroadcastData) => {
            socket.to(room.name).broadcast.emit(RoomEvent.Broadcast, data);
        });

        socket.on(RoomEvent.Disconnect, () => {
            log.connection(`Person '${personId}' leaving room '${room.name}'.`)
            roomsStore.leave(personId, room);

            socket
                .to(room.name)
                .broadcast.emit(RoomEvent.OccupantsChanged, { occupants: Object.fromEntries(room.occupants) });
        });
    });
});

server.listen(socketPort, () => {
    log.connection(`Listening on port ${socketPort}...`);
});
