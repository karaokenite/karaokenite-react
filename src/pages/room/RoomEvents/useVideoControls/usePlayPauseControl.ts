import { useEffect } from "react";

import { controls, videoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";

import { useEmitOnClick } from "../useEmitOnClick";

export const usePlayPauseControl = () => {
  const { originalRoomData, roomData } = useRoomContext();
  const { currentTime, playing } = roomData.get();

  useEmitOnClick(controls.playPauseButton, (oldRoomData) => ({
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

  useEffect(() => {
    videoElement.currentTime = originalRoomData.currentTime;

    if (originalRoomData.playing) {
      videoElement.play();
    }
  }, [originalRoomData]);
};
