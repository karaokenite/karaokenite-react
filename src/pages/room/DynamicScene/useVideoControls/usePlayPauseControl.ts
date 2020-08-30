import { useEffect } from "react";

import { controls, videoElement } from "@components/elements";

import { useRoomContext } from "../../RoomContext";
import { useOnClick } from "../useOnClick";

export const usePlayPauseControl = () => {
  const { roomData } = useRoomContext();
  const { currentTime, playing } = roomData.get();

  useOnClick(controls.playPauseButton, (oldRoomData) => ({
    currentTime: videoElement.currentTime,
    playing: !oldRoomData.playing,
  }));

  useEffect(() => {
    controls.playPauseButton.setAttribute("src", playing ? "#pause" : "#play");

    if (playing) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [currentTime, playing]);
};
