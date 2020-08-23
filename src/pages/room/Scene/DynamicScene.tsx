import { Scene as ARScene } from "aframe-react";
import React, { useEffect } from "react";

import { socketPort } from "@data/ports";
import { PersonId } from "@data/types";

import { useRoomContext } from "../RoomContext";
import { roomConnection } from "../RoomConnection";

export const DynamicScene: React.FC = ({ children }) => {
  const context = useRoomContext();

  useEffect(() => {
    window.KaraokeNiteListenToConnection = ({ detail: { clientId } }) => {
      roomConnection(
        context,
        clientId as PersonId,
        NAF.connection.adapter.socket
      );
    };
  });

  return (
    <ARScene
      dynamic-room
      networked-scene={{
        adapter: "webrtc",
        audio: "true",
        onConnect: "KaraokeNiteListenToConnection",
        room: context.roomName.get(),
        serverURL: `:${socketPort}`,
      }}
    >
      {children}
    </ARScene>
  );
};
