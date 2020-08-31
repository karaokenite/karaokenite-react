import { useEffect } from "react";

import { controls, videoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";
import { allSongs } from "@shared/songs";

import { useEmitOnClick } from "../useEmitOnClick";

export const useNextPreviousControls = () => {
  const { roomData } = useRoomContext();
  const { playing, songIndex, songs } = roomData.get();

  useEmitOnClick(controls.nextButton, (oldRoomData) => ({
    songIndex: (oldRoomData.songIndex + 1) % songs.length,
  }));

  useEmitOnClick(controls.previousButton, (oldRoomData) => ({
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
