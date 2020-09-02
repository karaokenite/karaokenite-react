import { useEffect } from "react";

import { KaraokeEvent } from "@shared/events";
import { OccupantsUpdatedData, RoomDataUpdatedData } from "@shared/types";

import { RoomContextValue } from "../../types";

export const useRoomDataSyncing = (
  roomContext: RoomContextValue,
  socket: SocketIOClient.Socket
) => {
  const { client, occupants, roomData } = roomContext;
  const { username } = client.get();

  // Todo (#16): this could probably move to step 2 of data conneciton.
  useEffect(() => {
    socket.emit(KaraokeEvent.UsernameSet, { username });
  }, [socket, username]);

  // This sets up a listener for the OccupantsUpdated event.
  // We update our local occupants list for the new list of people.
  useEffect(() => {
    const onOccupantsUpdated = (data: OccupantsUpdatedData) => {
      occupants.set(
        new Map(data.occupants.map((person) => [person.id, person]))
      );
    };

    socket.on(KaraokeEvent.OccupantsUpdated, onOccupantsUpdated);

    return () => {
      socket.off(KaraokeEvent.OccupantsUpdated, onOccupantsUpdated);
    };
  }, [occupants, socket]);

  // This sets up a listener for the RoomDataUpdated event.
  // We override keys on local room data for any new provided values.
  useEffect(() => {
    const onRoomDataUpdated = (data: RoomDataUpdatedData) => {
      roomData.set({
        ...roomData.get(),
        ...data,
      });
    };

    socket.on(KaraokeEvent.RoomDataUpdated, onRoomDataUpdated);

    return () => {
      socket.off(KaraokeEvent.RoomDataUpdated, onRoomDataUpdated);
    };
  }, [roomData, socket]);
};
