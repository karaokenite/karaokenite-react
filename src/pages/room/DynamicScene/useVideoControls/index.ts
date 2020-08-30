import { useNextPreviousControls } from "./useNextPreviousControls";
import { usePlayPauseControl } from "./usePlayPauseControl";
import { useVolumeControls } from "./useVolumeControls";

export const useVideoControls = () => {
  useNextPreviousControls();
  usePlayPauseControl();
  useVolumeControls();
};
