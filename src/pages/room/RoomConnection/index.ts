import { KaraokeEvent } from "@data/events";
import { PersonId, UpdateOccupantsData } from "@data/types";

import { RoomContextValue } from "../types";

export const roomConnection = (context: RoomContextValue, personId: PersonId, socket: SocketIOClient.Socket) => {
    const { client, occupants } = context;

    socket.emit(KaraokeEvent.UsernameSet, {
        username: client.get().username,
    });

    socket.on(KaraokeEvent.OccupantsUpdated, (data: UpdateOccupantsData) => {
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
