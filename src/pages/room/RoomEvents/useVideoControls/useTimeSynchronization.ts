import { useEffect } from "react";
import { useInterval } from "react-use";

import { videoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";
import { videoSyncInterval } from "@components/constants";

export const useTimeSynchronization = () => {
  const { emitRoomData, roomData } = useRoomContext();
  const { currentTime, playing } = roomData.get();

  // Constantly update the server on the current time of the video if playing
  useInterval(() => {
    if (playing) {
      emitRoomData({
        currentTime: videoElement.currentTime,
      });
    }
  }, videoSyncInterval);

  // If the video is paused, we can safely match its time to currentTime
  useEffect(() => {
    if (!playing) {
      videoElement.currentTime = currentTime;
    }
  }, [currentTime, playing]);
};
