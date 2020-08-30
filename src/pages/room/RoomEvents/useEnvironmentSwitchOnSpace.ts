import { useCallback } from "react";
import { useEvent } from "react-use";

import { useEmitRoomData } from "@connection/EmitContext";
import { useRoomContext } from "@connection/RoomContext";
import { environments } from "@shared/rooms";

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
