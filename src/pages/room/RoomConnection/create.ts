
import { KaraokeEvent } from "@data/events";
import { PersonId, OccupantsUpdatedData, JukeboxUpdatedData } from "@data/types";

import { RoomContextValue } from "../types";

export const createRoomConnection = (context: RoomContextValue, personId: PersonId, socket: SocketIOClient.Socket) => {
    const { client, occupants, playing, songIndex, volume } = context;

    socket.emit(KaraokeEvent.UsernameSet, {
        username: client.get().username,
    });

    socket.on(KaraokeEvent.JukeboxUpdated, (data: JukeboxUpdatedData) => {
        if (data.playing !== undefined) {
            playing.set(data.playing);
        }

        if (data.songIndex !== undefined) {
            songIndex.set(data.songIndex);
        }

        if (data.volume !== undefined) {
            volume.set(data.volume);
        }
    });

    socket.on(KaraokeEvent.OccupantsUpdated, (data: OccupantsUpdatedData) => {
        client.set({
            ...client.get(),
            id: personId,
        });

        occupants.set(
            new Map(
                data.occupants.map((otherPerson) => [otherPerson.id, otherPerson])
            )
        );
    });
};
