import { useEffect } from "react";

import { videoElement } from "@components/elements";
import { videoSyncInterval } from "@components/constants";
import { useRoomContext } from "@connection/RoomContext";

/**
 * Initializes the video for when the room is first created.
 */
export const useInitialVideoSetup = () => {
  const { originalRoomData } = useRoomContext();

  // Called when the room is first initialized to set the initial currentTime and
  // play/pause status on the <video> element per the initial room data.
  useEffect(() => {
    // Video timing is, on average, behind by half of the sync interval.
    // currentTime is also measured in seconds instead of milliseconds for some reason.
    videoElement.currentTime =
      originalRoomData.currentTime + videoSyncInterval / 2000;

    if (originalRoomData.playing) {
      videoElement.play();
    }
  }, [originalRoomData]);
};
