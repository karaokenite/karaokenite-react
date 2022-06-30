import { useEffect } from "react";
import { useInterval } from "react-use";

import { getVideoElement } from "@components/elements";
import { videoSyncInterval } from "@components/constants";
import { useRoomContext } from "@connection/RoomContext";

/**
 * Synchronizes our view on the three places of video currentTime.
 */
export const useTimeSynchronization = () => {
  const { emitRoomData, roomData } = useRoomContext();
  const { currentTime, playing } = roomData.get();

  // While we're playing, periodically update the server on the current vdeo time.
  // This is sending data from **DOM** to **React** and **Node**.
  // Todo (#14): only the player should do this.
  useInterval(() => {
    if (playing) {
      emitRoomData({
        currentTime: getVideoElement().currentTime,
      });
    }
  }, videoSyncInterval);

  // While we're paused, we can constantly safely match its time to currentTime.
  // This is sending data from **React** to the **DOM**.
  useEffect(() => {
    if (!playing) {
      getVideoElement().currentTime = currentTime;
    }
  }, [currentTime, playing]);
};
