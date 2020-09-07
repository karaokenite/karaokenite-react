import React from "react";

import { useEnvironmentSwitchOnSpace } from "./useEnvironmentSwitchOnSpace";
import { usePlayerSync } from "./usePlayerSync";
import { useVideoControls } from "./useVideoControls";

export const RoomEvents: React.FC = () => {
  useEnvironmentSwitchOnSpace();
  usePlayerSync();
  useVideoControls();

  return null;
};
