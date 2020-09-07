import React from "react";

import { useEnvironmentSwitchOnSpace } from "./useEnvironmentSwitchOnSpace";
import { useVideoControls } from "./useVideoControls";

export const RoomEvents: React.FC = () => {
  useEnvironmentSwitchOnSpace();
  useVideoControls();

  return null;
};
