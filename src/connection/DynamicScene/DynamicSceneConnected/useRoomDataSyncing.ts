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

  // mention probably todo be moved to the step 2
  useEffect(() => {
    socket.emit(KaraokeEvent.UsernameSet, { username });
  }, [socket, username]);

  useEffect(() => {
    const onOccupantsUpdated = (data: OccupantsUpdatedData) => {
      occupants.set(
        new Map(
          data.occupants.map((otherPerson) => [otherPerson.id, otherPerson])
        )
      );
    };

    socket.on(KaraokeEvent.OccupantsUpdated, onOccupantsUpdated);

    return () => {
      socket.off(KaraokeEvent.OccupantsUpdated, onOccupantsUpdated);
    };
  }, [occupants, socket]);

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
