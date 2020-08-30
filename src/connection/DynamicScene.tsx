import React from "react";

import { RoomQuery } from "@shared/types";

import { EmitContext } from "./EmitContext";
import { RoomContext, useRoomContextValue } from "./RoomContext";
import { useRoomConnection } from "./useRoomConnection";

export type DynamicSceneProps = {
  settings: RoomQuery;
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
        {children}
      </RoomContext.Provider>
    </EmitContext.Provider>
  );
};
