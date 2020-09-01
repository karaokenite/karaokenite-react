import { useEffect } from "react";
import { useInterval } from "react-use";

import { videoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";
import { videoSyncInterval } from "@components/constants";

export const useTimeSynchronization = () => {
  const { emitRoomData, roomData } = useRoomContext();
  const { currentTime, playing } = roomData.get();

  // Constantly update the server on the current time of the video if playing
  // Sending data from _DOM_ to _React_ and _Node_
  useInterval(() => {
    if (playing) {
      emitRoomData({
        currentTime: videoElement.currentTime,
      });
    }
  }, videoSyncInterval);

  // If the video is paused, we can safely match its time to currentTime
  // Sending data from _React_ to _DOM_
  useEffect(() => {
    if (!playing) {
      // todo: make a shared thingy for this? idk
      videoElement.currentTime = currentTime + videoSyncInterval / 2000;
    }
  }, [currentTime, playing]);
};
