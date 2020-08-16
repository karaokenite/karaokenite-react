import Head from "next/head";
import React from "react";

import styles from "./styles.module.scss";

export const Scene: React.FC = () => {
  return (
    <>
      <Head>
        {/* <script src="/scripts/video-sync.js"></script> */}
        {/* <script src="/scripts/host.js"></script> */}
        {/* <script src="/scripts/dynamic-room.js"></script> */}
        {/* <script src="/scripts/scene.js"></script> */}
        <script src="/scripts/registrations.js"></script>
      </Head>
      <div className={styles.scene}>
        <div id="host" />
        <div id="counter" />
        <div id="roomName" />

        <a-scene dynamic-room>
          <a-entity environment="preset: osiris"></a-entity>
        </a-scene>
      </div>
    </>
  );
};
