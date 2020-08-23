import { Scene as ARScene } from "aframe-react";
import React from "react";

import { socketPort } from "@data/ports";

import { globalOnConnectHook, useRoomConnection } from "../RoomConnection";
import { EmitContext } from "../RoomConnection/emit";
import { useRoomContext } from "../RoomContext";
import { Assets } from "./Assets";
import { Entities } from "./Entities";
import { Environment } from "./Environment";
import styles from "./styles.module.scss";
import { Templates } from "./Templates";
import { VideoArea } from "./VideoArea";

export const Scene: React.FC = () => {
  const emit = useRoomConnection();
  const roomContext = useRoomContext();

  return (
    <EmitContext.Provider value={emit}>
      <div className={styles.scene}>
        <ARScene
          cursor="rayOrigin: mouse"
          dynamic-room
          networked-scene={{
            adapter: "webrtc",
            audio: "true",
            onConnect: globalOnConnectHook,
            room: roomContext.roomName.get(),
            serverURL: `:${socketPort}`,
          }}
        >
          <Templates />
          <Assets />
          <Environment />
          <VideoArea />
          <Entities />
        </ARScene>
      </div>
    </EmitContext.Provider>
  );
};
