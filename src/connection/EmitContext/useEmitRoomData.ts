import { KaraokeEvent } from "@shared/events";
import { RoomData } from "@shared/types";

import { useRoomContext } from "../RoomContext";
import { useEmitContext } from "./EmitContext";

export const useEmitRoomData = () => {
  const emit = useEmitContext();
  const { roomData } = useRoomContext();

  return (newDataRequest: Partial<RoomData>) => {
    const oldData = roomData.get();
    const updatedValues = Object.entries(newDataRequest).filter(
      ([key, value]) => oldData[key as keyof RoomData] !== value
    );
    if (updatedValues.length === 0) {
      return;
    }

    const newData = Object.fromEntries(updatedValues);

    roomData.set({ ...oldData, ...newData });
    emit(KaraokeEvent.RoomDataUpdated, newData);
  };
};
