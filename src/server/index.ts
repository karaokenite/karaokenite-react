import http from "http";
import Koa from "koa";
import socketio from 'socket.io';

import { AframeEvent, KaraokeEvent } from "@data/events";
import { socketPort } from "@data/ports";
import { JoinRoomData, PersonId, RoomPerson } from "@data/types";

import { aframeEvents } from "./events/aframe";
import { karaokeEvents } from "./events/karaoke";
import { createLogger } from "./logging";
import { RoomsStore } from "./RoomsStore";

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
        const registration = { io, log, person, room, socket };

        socket.join(roomName);

        aframeEvents(registration);
        karaokeEvents(registration);

        socket.on('disconnect', () => {
            roomsStore.leave(person.id, room);

            socket
                .to(room.name)
                .emit(AframeEvent.OccupantsChanged, { occupants: Object.fromEntries(room.occupants) });

            socket
                .to(room.name)
                .emit(KaraokeEvent.OccupantsUpdated, { occupants: Array.from(room.occupants.values()) });
        });

        log("Connected.");
    });
});

server.listen(socketPort, () => {
    logConnection(`Listening on port ${socketPort}...`);
});
