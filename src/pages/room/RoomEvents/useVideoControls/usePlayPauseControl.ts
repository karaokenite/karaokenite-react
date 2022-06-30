import { useEffect } from "react";

import { getControls, getVideoElement } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";

import { useEmitOnClick } from "../useEmitOnClick";

/**
 * Hooks up events for the play/pause button.
 */
export const usePlayPauseControl = () => {
  const { roomData } = useRoomContext();
  const { playing } = roomData.get();

  // When the play/pause button is clicked, we always update server time -- regardless of player:
  // * If the video is paused, we are now becoming a player and decide current time.
  // * If the video is playing, everyone else needs to know the exact pause time.
  useEmitOnClick(getControls().playPauseButton, (oldRoomData) => ({
    currentTime: getVideoElement().currentTime,
    playing: !oldRoomData.playing,
  }));

  // Whenever the "playing" data changes -sourced locally or from the server-,
  // the button updates and we call the appropriate method on the <video> element.
  useEffect(() => {
    getControls().playPauseButton.setAttribute(
      "src",
      playing ? "#pause" : "#play"
    );

    if (playing) {
      getVideoElement().play();
    } else {
      getVideoElement().pause();
    }
  }, [playing]);
};
