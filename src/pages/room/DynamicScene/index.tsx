import React from "react";

import { useRoomConnection } from "./RoomConnection";
import { EmitContext } from "./RoomConnection/emit";
import { DynamicSceneEvents } from "./DynamicSceneEvents";

export const DynamicScene: React.FC = () => {
  const emit = useRoomConnection();

  return (
    <EmitContext.Provider value={emit}>
      <DynamicSceneEvents />
    </EmitContext.Provider>
  );
};
