import { useEvent } from "react-use";

import { RoomData } from "@shared/types";

import { useRoomContext } from "../RoomContext";
import { useEmitRoomData } from "./RoomConnection/data";

export const useOnClick = (
  element: HTMLElement,
  getNewData: (oldRoomData: RoomData) => Partial<RoomData>
) => {
  const emitRoomData = useEmitRoomData();
  const { roomData } = useRoomContext();

  const handler = () => {
    emitRoomData(getNewData(roomData.get()));
  };

  useEvent("click", handler, element);
};
