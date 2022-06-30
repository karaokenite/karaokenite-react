import { useEnvironmentSwitchOnSpace } from "./useEnvironmentSwitchOnSpace";
import { useVideoControls } from "./useVideoControls";

export const RoomEvents = () => {
  useEnvironmentSwitchOnSpace();
  useVideoControls();

  return null;
};
