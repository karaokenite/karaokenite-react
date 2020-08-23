import { KaraokeEvent } from "@data/events";
import { JukeboxUpdatedData, SetUsernameData } from "@data/types";

import { ServerRegistration } from "../types";

export const karaokeEvents = ({ io, log, person, room, socket }: ServerRegistration) => {
    socket.on(KaraokeEvent.UsernameSet, ({ username }: SetUsernameData) => {
        log(`Setting username to '${username}'.`)
        person.username = username;
        io.in(room.name).emit(KaraokeEvent.OccupantsUpdated, { occupants: Array.from(room.occupants.values()) });
    });

    socket.on(KaraokeEvent.JukeboxUpdated, (data: JukeboxUpdatedData) => {
        log(`Updated jukebox: ${JSON.stringify(data)}`);
        socket.to(room.name).emit(KaraokeEvent.JukeboxUpdated, data);
    });
}