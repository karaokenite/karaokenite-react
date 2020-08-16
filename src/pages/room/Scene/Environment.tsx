import { Entity as AEntity } from "aframe-react";

import { useRoomContext } from "../RoomContext";
import { useEnvironmentSwitchOnSpace } from "./useEnvironmentSwitchOnSpace";

export const Environment: React.FC = () => {
  const { environment } = useRoomContext();

  useEnvironmentSwitchOnSpace(environment);

  return <AEntity environment={`preset: ${environment.get()}`}></AEntity>;
};
