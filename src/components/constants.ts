export const environmentSelector = "[environment]";

export const modalsElementId = "modals";

export const rootElementId = "root";

export const sceneSelector = "a-scene";

export const videoElementId = "html-video";

export const controlIds = {
  nextButton: "next-button",
  playPauseButton: "play-pause-button",
  previousButton: "previous-button",
  volumeHighButton: "volume-high-button",
  volumeLowButton: "volume-low-button",
};

/**
 * How much, out of 1, to change volume on each button press.
 */
export const volumeChangeRate = 0.25;

/**
 * How often to emit currentTime updates.
 */
export const videoSyncInterval = 500;
