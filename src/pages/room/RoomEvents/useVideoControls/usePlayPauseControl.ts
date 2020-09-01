import { useEffect } from "react";

import { controls, videoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";

import { useEmitOnClick } from "../useEmitOnClick";
import { videoSyncInterval } from "@components/constants";

export const usePlayPauseControl = () => {
  const { originalRoomData, roomData } = useRoomContext();
  const { playing } = roomData.get();

  // ...
  useEmitOnClick(controls.playPauseButton, (oldRoomData) => ({
    currentTime: videoElement.currentTime,
    playing: !oldRoomData.playing,
  }));

  // ...
  // TODO document these bigger groups of things all over da place
  useEffect(() => {
    controls.playPauseButton.setAttribute("src", playing ? "#pause" : "#play");

    if (playing) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [playing]);

  // Called when the room is first initialized
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
