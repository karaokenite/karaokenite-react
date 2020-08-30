import { useEvent } from "react-use";

import { useEmitRoomData } from "@connection/EmitContext";
import { useRoomContext } from "@connection/RoomContext";
import { RoomData } from "@shared/types";

export const useEmitOnClick = (
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
