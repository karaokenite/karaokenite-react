import React from "react";

import { RoomSettings } from "@shared/types";

import { DynamicSceneConnected } from "../DynamicSceneConnected";
import { useRoomDataConnection } from "./useRoomDataConnection";

export interface DynamicSceneHydratingProps {
  children: React.ReactNode;
  settings: RoomSettings;
  socket: SocketIOClient.Socket;
}

export const DynamicSceneHydrating = ({
  children,
  settings,
  socket,
}: DynamicSceneHydratingProps) => {
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
