import http from "http";
import Koa from "koa";
import socketio from 'socket.io';

import { AframeEvent } from "@data/events";
import { socketPort } from "@data/ports";
import { JoinRoomData, PersonId, RoomPerson } from "@data/types";

import { createLogger } from "./logging";
import { RoomsStore } from "./RoomsStore";
import { aframeEvents } from "./events/aframe";
import { karaokeEvents } from "./events/karaoke";

const logConnection = createLogger("connection");
const koa = new Koa();
const server = http.createServer(koa.callback());
const io = socketio(server);
const roomsStore = new RoomsStore();

io.on("connection", (socket) => {
    const personId = socket.id as PersonId;

    socket.on(AframeEvent.JoinRoom, ({ room: roomName }: JoinRoomData) => {
        const person: RoomPerson = {
            id: personId,
            joinedTime: Date.now(),
        };
        const room = roomsStore.join(roomName, person);
        const log = logConnection.within(["room", roomName], ["person", person.id]);
        const registration = { io, log, person, room, roomsStore, socket };

        socket.join(roomName);

        aframeEvents(registration);
        karaokeEvents(registration);

        log("Connected.");
    });
});

server.listen(socketPort, () => {
    logConnection(`Listening on port ${socketPort}...`);
});
