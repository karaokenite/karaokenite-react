import { Scene as ARScene, Entity as AREntity } from "aframe-react";
import React from "react";

import { Assets } from "./Assets";
import styles from "./styles.module.scss";
import { Environment } from "./Environment";
import { VideoArea } from "./VideoArea";

export const Scene: React.FC = () => {
  return (
    <>
      <div className={styles.scene}>
        <ARScene networked-scene dynamic-room>
          <Assets />
          <Environment />
          <VideoArea />

          <AREntity
            camera
            id="player"
            look-controls
            networked="template:#avatar-template;attachTemplateToLocal:false;"
            wasd-controls
          ></AREntity>

          <AREntity id="mouseCursor" cursor="rayOrigin: mouse"></AREntity>
        </ARScene>
      </div>
    </>
  );
};
