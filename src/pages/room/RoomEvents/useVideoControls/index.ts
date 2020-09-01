import { useInitialVideoSetup } from "./useInitialVideoSetup";
import { useTimeSynchronization } from "./useTimeSynchronization";
import { useNextPreviousControls } from "./useNextPreviousControls";
import { usePlayPauseControl } from "./usePlayPauseControl";
import { useVolumeControls } from "./useVolumeControls";

export const useVideoControls = () => {
  useInitialVideoSetup();
  useTimeSynchronization();
  useNextPreviousControls();
  usePlayPauseControl();
  useVolumeControls();
};
