import { Scene as AScene, Entity as AEntity } from "aframe-react";
import Head from "next/head";
import React from "react";

import styles from "./styles.module.scss";
import { useRoomContext } from "../RoomContext";
import { useEnvironmentSwitchOnSpace } from "./useEnvironmentSwitchOnSpace";

export const Scene: React.FC = () => {
  const { environment } = useRoomContext();

  useEnvironmentSwitchOnSpace(environment);

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

        <AScene dynamic-room>
          <AEntity environment={`preset: ${environment.get()}`}></AEntity>
        </AScene>
      </div>
    </>
  );
};
