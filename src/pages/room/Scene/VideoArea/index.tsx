import React from "react";

import { VideoPlayer } from "./VideoPlayer";
import { VideoButtons } from "./VideoButtons";

export const VideoArea: React.FC = () => {
  return (
    <>
      <VideoButtons />
      <VideoPlayer />
    </>
  );
};
