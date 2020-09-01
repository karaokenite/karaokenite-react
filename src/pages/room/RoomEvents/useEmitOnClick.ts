import { useEvent } from "react-use";

import { useRoomContext } from "@connection/RoomContext";
import { RoomData } from "@shared/types";

/**
 * Adds a "click" listener to an element that updates room data.
 *
 * @param element - DOM element to listen to clicks on.
 * @param getNewData - Generates a new section of room data from old room on demand.
 */
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
