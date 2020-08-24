import { useCallback } from "react";
import { useEvent } from "react-use";

import { KaraokeEvent } from "@shared/events";
import { environments } from "@shared/rooms";

import { Setter } from "../types";
import { useEmitContext } from "../RoomConnection/emit";

export const useEnvironmentSwitchOnSpace = (
  environment: string,
  setEnvironment: Setter<string>
) => {
  const emit = useEmitContext();
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode !== 32 /* spacebar */) {
        return;
      }

      const currentIndex = environments.indexOf(environment);
      const newEnvironment =
        environments[(currentIndex + 1) % environments.length];

      setEnvironment(newEnvironment);
      emit(KaraokeEvent.RoomDataUpdated, {
        environment: newEnvironment,
      });
    },
    [emit, environment, setEnvironment]
  );

  useEvent("keydown", onKeyDown);
};
