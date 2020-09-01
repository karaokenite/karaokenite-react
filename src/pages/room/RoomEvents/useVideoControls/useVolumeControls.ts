import { useEffect } from "react";

import { volumeChangeRate } from "@components/constants";
import { videoElement, controls } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";

import { useEmitOnClick } from "../useEmitOnClick";

/**
 * Hooks up events for the volume buttons.
 */
export const useVolumeControls = () => {
  const { roomData } = useRoomContext();
  const { volume } = roomData.get();

  // When the volume up button is pressed, increase volume to at most 1.
  useEmitOnClick(controls.volumeHighButton, (oldRoomData) => ({
    volume: Math.min(oldRoomData.volume + volumeChangeRate, 1),
  }));

  // When the volume up button is pressed, decrease volume to at least to 0.
  useEmitOnClick(controls.volumeLowButton, (oldRoomData) => ({
    volume: Math.max(oldRoomData.volume - volumeChangeRate, 0),
  }));

  // Whenever the volume data changes -sourced locally or from the server-,
  // we brighten or dim the buttons, and set the volume on the <video> element.
  useEffect(() => {
    controls.volumeHighButton.setAttribute(
      "opacity",
      volume === 1 ? "0.5" : "1"
    );
    controls.volumeLowButton.setAttribute(
      "opacity",
      volume === 0 ? "0.5" : "1"
    );
    videoElement.volume = volume;
  }, [volume]);
};
