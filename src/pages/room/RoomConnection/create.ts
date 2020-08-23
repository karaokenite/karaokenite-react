import { KaraokeEvent } from "@data/events";
import {
  PersonId,
  OccupantsUpdatedData,
  RoomDataUpdatedData,
} from "@data/types";

import { RoomContextValue } from "../types";

export const createRoomConnection = (
  context: RoomContextValue,
  personId: PersonId,
  socket: SocketIOClient.Socket
) => {
  const { client, occupants, roomData } = context;

  socket.emit(KaraokeEvent.UsernameSet, {
    username: client.get().username,
  });

  socket.on(KaraokeEvent.RoomDataUpdated, (data: RoomDataUpdatedData) => {
    roomData.set({
      ...roomData.get(),
      ...data,
    });
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
