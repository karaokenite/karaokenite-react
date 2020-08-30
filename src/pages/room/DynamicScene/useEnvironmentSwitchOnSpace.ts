import { useCallback } from "react";
import { useEvent } from "react-use";

import { environments } from "@shared/rooms";

import { useRoomContext } from "../RoomContext";
import { useEmitRoomData } from "./RoomConnection/data";

export const useEnvironmentSwitchOnSpace = () => {
  const emitRoomData = useEmitRoomData();
  const { roomData } = useRoomContext();
  const { environment } = roomData.get();

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode !== 32 /* spacebar */) {
        return;
      }

      const currentIndex = environments.indexOf(environment);
      const newEnvironment =
        environments[(currentIndex + 1) % environments.length];

      emitRoomData({
        environment: newEnvironment,
      });

      document
        .querySelector("[environment]")
        .setAttribute("environment", { preset: newEnvironment });
    },
    [emitRoomData, environment]
  );

  useEvent("keydown", onKeyDown);
};
