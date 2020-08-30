import { useEffect } from "react";

import { controls, videoElement } from "@components/elements";
import { allSongs } from "@shared/songs";

import { useRoomContext } from "../../RoomContext";
import { useOnClick } from "../useOnClick";

export const useNextPreviousControls = () => {
  const { roomData } = useRoomContext();
  const { playing, songIndex, songs } = roomData.get();

  useOnClick(controls.nextButton, (oldRoomData) => ({
    songIndex: (oldRoomData.songIndex + 1) % songs.length,
  }));

  useOnClick(controls.previousButton, (oldRoomData) => ({
    songIndex: Math.max(oldRoomData.songIndex - 1, 0),
  }));

  useEffect(() => {
    const newSrc = allSongs[songs[songIndex]].audio;
    if (videoElement.getAttribute("src") === newSrc) {
      return;
    }

    videoElement.setAttribute("src", newSrc);

    if (playing) {
      videoElement.play();
    }
  }, [playing, songIndex, songs]);
};
