import { Scene as ARScene, Entity as AREntity } from "aframe-react";
import React from "react";

import { Assets } from "./Assets";
import styles from "./styles.module.scss";
import { VideoArea } from "./VideoArea";
import { Environment } from "./Environment";

export const Scene: React.FC = () => {
  return (
    <>
      <div className={styles.scene}>
        <ARScene dynamic-room>
          <Assets />
          <Environment />
          <VideoArea />

          <AREntity id="mouseCursor" cursor="rayOrigin: mouse"></AREntity>
        </ARScene>
      </div>
    </>
  );
};
