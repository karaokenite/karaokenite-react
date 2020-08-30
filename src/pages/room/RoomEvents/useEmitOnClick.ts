import { useEvent } from "react-use";

import { useRoomContext } from "@connection/RoomContext";
import { RoomData } from "@shared/types";

export const useEmitOnClick = (
  element: HTMLElement,
  getNewData: (oldRoomData: RoomData) => Partial<RoomData>
) => {
  const { emitRoomData, roomData } = useRoomContext();

  const handler = () => {
    emitRoomData(getNewData(roomData.get()));
  };

  useEvent("click", handler, element);
};
