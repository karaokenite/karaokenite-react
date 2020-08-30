import { useCallback } from "react";
import { useEvent } from "react-use";

import { KaraokeEvent } from "@shared/events";
import { environments } from "@shared/rooms";

import { useEmitContext } from "./RoomConnection/emit";
import { useRoomContext } from "../RoomContext";

export const useEnvironmentSwitchOnSpace = () => {
  const emit = useEmitContext();
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

      roomData.set({
        ...roomData.get(),
        environment: newEnvironment,
      });

      emit(KaraokeEvent.RoomDataUpdated, {
        environment: newEnvironment,
      });

      document
        .querySelector("[environment]")
        .setAttribute("environment", { preset: newEnvironment });
    },
    [emit, environment, roomData]
  );

  useEvent("keydown", onKeyDown);
};
