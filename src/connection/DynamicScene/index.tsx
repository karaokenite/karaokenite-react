import React from "react";

import { RoomSettings } from "@shared/types";

import { useRoomConnection } from "../useRoomConnection";
import { DynamicSceneHydrating } from "./DynamicSceneHydrating";

export type DynamicSceneProps = {
  settings: RoomSettings;
};

export const DynamicScene: React.FC<DynamicSceneProps> = ({
  children,
  settings,
}) => {
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
