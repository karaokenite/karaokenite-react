import { KaraokeEvent } from "@shared/events";
import {
  PersonId,
  OccupantsUpdatedData,
  RoomDataUpdatedData,
} from "@shared/types";

import { RoomContextValue } from "../types";

export const createRoomConnection = (
  context: RoomContextValue,
  personId: PersonId,
  socket: SocketIOClient.Socket
) => {
  const { client, occupants, roomData } = context;

  client.set({
    ...client.get(),
    id: personId,
  });

  socket.emit(KaraokeEvent.UsernameSet, {
    username: client.get().username,
  });

  socket.on(KaraokeEvent.OccupantsUpdated, (data: OccupantsUpdatedData) => {
    occupants.set(
      new Map(
        data.occupants.map((otherPerson) => [otherPerson.id, otherPerson])
      )
    );
  });

  socket.on(KaraokeEvent.RoomDataUpdated, (data: RoomDataUpdatedData) => {
    roomData.set({
      ...roomData.get(),
      ...data,
    });
  });
};
