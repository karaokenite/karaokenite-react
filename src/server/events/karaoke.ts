import { KaraokeEvent } from "@data/events";
import { RoomDataUpdatedData, SetUsernameData } from "@data/types";

import { ServerRegistration } from "../types";

export const karaokeEvents = ({ io, log, person, room, socket }: ServerRegistration) => {
    socket.on(KaraokeEvent.UsernameSet, ({ username }: SetUsernameData) => {
        log(`Setting username to '${username}'.`)
        person.username = username;
        io.in(room.name).emit(KaraokeEvent.OccupantsUpdated, { occupants: Array.from(room.occupants.values()) });
        io.in(room.name).emit(KaraokeEvent.RoomDataUpdated, room.data);
    });

    socket.on(KaraokeEvent.RoomDataUpdated, (data: RoomDataUpdatedData) => {
        log(`Updated jukebox: ${JSON.stringify(data)}`);

        room.data = { ...room.data, ...data };
        io.in(room.name).emit(KaraokeEvent.RoomDataUpdated, room.data);
    });
}