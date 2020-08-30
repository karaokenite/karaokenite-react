import { useEvent } from "react-use";

import { KaraokeEvent } from "@shared/events";
import { RoomData } from "@shared/types";

import { useRoomContext } from "../RoomContext";
import { useEmitContext } from "./RoomConnection/emit";

export const useOnClick = (
  element: HTMLElement,
  getNewData: (oldRoomData: RoomData) => Partial<RoomData>
) => {
  const emit = useEmitContext();
  const { roomData } = useRoomContext();

  const handler = () => {
    const oldData = roomData.get();
    const newData = getNewData(oldData);

    roomData.set({ ...oldData, ...newData });
    emit(KaraokeEvent.RoomDataUpdated, newData);
  };

  useEvent("click", handler, element);
};
