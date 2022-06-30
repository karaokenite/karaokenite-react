import { useEffect } from "react";

import { getControls, getVideoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";
import { allSongs } from "@shared/songs";

import { useEmitOnClick } from "../useEmitOnClick";

/**
 * Hooks up the next and previous buttons to song index and the video element.
 */
export const useNextPreviousControls = () => {
  const { roomData } = useRoomContext();
  const { playing, songIndex, songs } = roomData.get();

  // When the next button is clicked, move to the next song.
  useEmitOnClick(getControls().nextButton, (oldRoomData) => ({
    songIndex: (oldRoomData.songIndex + 1) % songs.length,
  }));

  // When the next button is clicked, move to the previous song.
  useEmitOnClick(getControls().previousButton, (oldRoomData) => ({
    songIndex: Math.max(oldRoomData.songIndex - 1, 0),
  }));

  // This effect is a reaction to song index change -sourced locally or from the server-.
  // If the video needs a new src, set it, and play the video if it should be.
  useEffect(() => {
    const newSrc = allSongs[songs[songIndex]].audio;
    if (getVideoElement().getAttribute("src") === newSrc) {
      return;
    }

    getVideoElement().setAttribute("src", newSrc);

    if (playing) {
      getVideoElement().play();
    }
  }, [playing, songIndex, songs]);
};
