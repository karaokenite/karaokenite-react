import { useEffect } from "react";
import { useInterval } from "react-use";

import { videoElementSyncInterval } from "@components/constants";
import { videoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";

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
