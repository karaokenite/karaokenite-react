import { useCallback } from "react";

import { KaraokeEvent } from "@shared/events";
import { RoomData } from "@shared/types";

import { EmitUpdate } from "../../EmitContext";
import { GetterAndSetter } from "../../types";

/**
 * Creates a function that takes in any amount of `RoomData` and simultaneously
 * updates both React (local) state *and* the server (via a Socket.IO message).
 */
export const useEmitRoomData = (
  emit: EmitUpdate,
  roomData: GetterAndSetter<RoomData>
) => {
  const emitRoomData = useCallback(
    (newDataRequest: Partial<RoomData>) => {
      // Whenever new data is passed to this locally, we first grab the old data
      // and get the new data values that aren't the same as their old versions.
      const oldData = roomData.get();
      const updatedValues = Object.entries(newDataRequest).filter(
        ([key, value]) => oldData[key as keyof RoomData] !== value
      );

      // If no new data values are different ("updated"), we can skip sending an update.
      if (updatedValues.length === 0) {
        return;
      }

      // Otherwise, we package those new data values into a new object...
      const newData = Object.fromEntries(updatedValues);

      // ...update our local React state with them (which gets messaged to `RoomContext` consumers)...
      roomData.set({ ...oldData, ...newData });

      // ...and emit an equivalent data update to the server.
      emit(KaraokeEvent.RoomDataUpdated, newData);
    },
    [emit, roomData]
  );

  return emitRoomData;
};
