import React from "react";

import {
  RoomContext,
  RoomContextSettings,
  useRoomContextValue,
} from "../RoomContext";
import { useRoomConnection } from "./RoomConnection";
import { EmitContext } from "./RoomConnection/emit";
import { DynamicSceneEvents } from "./DynamicSceneEvents";

export type DynamicSceneProps = {
  settings: RoomContextSettings;
};

export const DynamicScene: React.FC<DynamicSceneProps> = ({
  children,
  settings,
}) => {
  const roomContextValue = useRoomContextValue(settings);
  const emit = useRoomConnection(roomContextValue);

  return (
    <EmitContext.Provider value={emit}>
      <RoomContext.Provider value={roomContextValue}>
        <DynamicSceneEvents />
        {children}
      </RoomContext.Provider>
    </EmitContext.Provider>
  );
};
