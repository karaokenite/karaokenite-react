import { Scene as AScene } from "aframe-react";
import React from "react";

import { Assets } from "./Assets";
import styles from "./styles.module.scss";
import { VideoArea } from "./VideoArea";
import { Environment } from "./Environment";

export const Scene: React.FC = () => {
  return (
    <>
      <div className={styles.scene}>
        <AScene dynamic-room>
          <Assets />
          <Environment />
          <VideoArea />

          <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
        </AScene>
      </div>
    </>
  );
};
