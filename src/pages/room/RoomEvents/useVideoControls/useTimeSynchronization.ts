import { useEffect } from "react";
import { useInterval } from "react-use";

import { videoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";

/**
 * How often to emit currentTime updates.
 */
const videoElementSyncInterval = 1000;

export const useTimeSynchronization = () => {
  const { emitRoomData, roomData } = useRoomContext();
  const { currentTime, playing } = roomData.get();

  useInterval(() => {
    emitRoomData({
      currentTime: videoElement.currentTime,
    });
  }, videoElementSyncInterval);

  useEffect(() => {
    if (!playing) {
      videoElement.currentTime = currentTime;
    }
  }, [currentTime, playing]);
};
