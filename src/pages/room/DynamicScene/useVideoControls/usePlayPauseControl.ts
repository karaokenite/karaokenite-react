import { useEffect } from "react";

import { videoSyncAttribute } from "@components/constants";
import { controls, videoElement } from "@components/elements";

import { useRoomContext } from "../../RoomContext";
import { useOnClick } from "../useOnClick";

export const usePlayPauseControl = () => {
  const { roomData } = useRoomContext();
  const { playing } = roomData.get();

  useOnClick(controls.playPauseButton, (oldRoomData) => ({
    playing: !oldRoomData.playing,
  }));

  useEffect(() => {
    controls.playPauseButton.setAttribute("src", playing ? "#pause" : "#play");
    videoElement.setAttribute(videoSyncAttribute, "paused", !playing);

    if (playing) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [playing]);
};
