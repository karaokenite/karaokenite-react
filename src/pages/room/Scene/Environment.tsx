import { Entity } from "aframe-react";

import { useRoomContext } from "../RoomContext";
import { useEnvironmentSwitchOnSpace } from "./useEnvironmentSwitchOnSpace";

export const Environment: React.FC = () => {
  const { environment } = useRoomContext();

  useEnvironmentSwitchOnSpace(environment);

  return <Entity environment={`preset: ${environment.get()}`}></Entity>;
};
