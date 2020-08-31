import React from "react";

import { RoomSettings } from "@shared/types";

import { DynamicSceneConnected } from "../DynamicSceneConnected";
import { useRoomDataConnection } from "./useRoomDataConnection";

export type DynamicSceneHydratingProps = {
  settings: RoomSettings;
  socket: SocketIOClient.Socket;
};

export const DynamicSceneHydrating: React.FC<DynamicSceneHydratingProps> = ({
  children,
  settings,
  socket,
}) => {
  const roomData = useRoomDataConnection(socket);

  if (!roomData) {
    return null;
  }

  return (
    <DynamicSceneConnected
      settings={settings}
      socket={socket}
      roomData={roomData}
    >
      {children}
    </DynamicSceneConnected>
  );
};
