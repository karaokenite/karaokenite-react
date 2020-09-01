import { useCallback } from "react";

import { KaraokeEvent } from "@shared/events";
import { RoomData } from "@shared/types";

import { EmitUpdate } from "../../EmitContext";
import { GetterAndSetter } from "../../types";

// ...docs!!
export const useRoomDataEmit = (
  emit: EmitUpdate,
  roomData: GetterAndSetter<RoomData>
) => {
  const emitRoomData = useCallback(
    (newDataRequest: Partial<RoomData>) => {
      const oldData = roomData.get();
      const updatedValues = Object.entries(newDataRequest).filter(
        ([key, value]) => oldData[key as keyof RoomData] !== value
      );
      if (updatedValues.length === 0) {
        return;
      }

      const newData = Object.fromEntries(updatedValues);

      // explain this
      roomData.set({ ...oldData, ...newData });

      // and this
      emit(KaraokeEvent.RoomDataUpdated, newData);
    },
    [emit, roomData]
  );

  return emitRoomData;
};
