import React from "react";

import { RoomSettings } from "@shared/types";

import { useRoomConnection } from "../useRoomConnection";
import { DynamicSceneHydrating } from "./DynamicSceneHydrating";

export interface DynamicSceneProps {
  children: React.ReactNode;
  settings: RoomSettings;
}

export const DynamicScene = ({ children, settings }: DynamicSceneProps) => {
  const socket = useRoomConnection(settings.room);

  if (!socket) {
    return null;
  }

  return (
    <DynamicSceneHydrating settings={settings} socket={socket}>
      {children}
    </DynamicSceneHydrating>
  );
};
