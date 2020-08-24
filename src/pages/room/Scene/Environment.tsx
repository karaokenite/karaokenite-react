import { Entity } from "aframe-react";
import React from "react";

import { useRoomContext } from "../RoomContext";
import { useEnvironmentSwitchOnSpace } from "./useEnvironmentSwitchOnSpace";

export const Environment: React.FC = () => {
  const { roomData } = useRoomContext();
  const { environment } = roomData.get();

  useEnvironmentSwitchOnSpace(environment, (newEnvironment) =>
    roomData.set({
      ...roomData.get(),
      environment: newEnvironment,
    })
  );

  return <Entity environment={`preset: ${environment}`}></Entity>;
};
