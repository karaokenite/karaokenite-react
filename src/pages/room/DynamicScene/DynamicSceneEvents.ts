import React from "react";

import { useEnvironmentSwitchOnSpace } from "./useEnvironmentSwitchOnSpace";
import { useVideoControls } from "./useVideoControls";

export const DynamicSceneEvents: React.FC = () => {
  useEnvironmentSwitchOnSpace();
  useVideoControls();

  return null;
};
