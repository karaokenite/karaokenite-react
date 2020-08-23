import http from "http";
import Koa from "koa";
import socketio from 'socket.io';

import { RoomEvent } from "@data/events";
import { socketPort } from "@data/ports";
import { RoomJoinData, PersonId } from "@data/types";

import { log } from "./logging";
import { RoomsMap, ServerRoom } from "./RoomsMap";

const koa = new Koa();
const server = http.createServer(koa.callback());
const io = socketio(server);
const rooms = new RoomsMap();

const createRoomUpdateData = (room: ServerRoom) => ({
    people: Array.from(room.people.values()),
    roomName: room.name,
});

io.on('connect', (socket) => {
    const id = socket.id as PersonId;
    log.connection(`User '${id}' connected.`);

    socket.on(RoomEvent.Join, ({ roomName, person }: RoomJoinData) => {
        const room = rooms.join(roomName, person);
        const data = createRoomUpdateData(room);

        socket.emit(RoomEvent.Update, data);
        socket.join(roomName);
        socket.to(room.name).emit(RoomEvent.Update, data);
    });

    socket.on('disconnect', () => {
        const room = rooms.leave(id);
        if (room instanceof Error) {
            log.connection(rooms.leave(id));
            return;
        }

        log.connection(`User '${id}' disconnected from room '${room.name}.`);
        socket.to(room.name).emit(RoomEvent.Update, createRoomUpdateData(room));
    });
});


server.listen(socketPort);

log.connection(`Listening on port ${socketPort}...`)
