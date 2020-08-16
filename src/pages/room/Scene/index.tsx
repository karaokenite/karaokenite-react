import { Scene as AScene } from "aframe-react";
import Head from "next/head";
import React from "react";

import { Assets } from "./Assets";
import styles from "./styles.module.scss";
import { VideoArea } from "./VideoArea";
import { Environment } from "./Environment";

export const Scene: React.FC = () => {
  return (
    <>
      <Head>
        <script src="/scripts/registrations.js"></script>
      </Head>
      <div className={styles.scene}>
        <div id="host" />
        <div id="counter" />
        <div id="roomName" />

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
