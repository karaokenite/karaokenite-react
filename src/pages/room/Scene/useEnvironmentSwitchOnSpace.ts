
import { useCallback } from "react";
import { useEvent } from "react-use";

import { environments } from "@data/environments";

import { GetterAndSetter } from "../types";

export const useEnvironmentSwitchOnSpace = (environment: GetterAndSetter<string>) => {
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.keyCode === 32 /* spacebar */) {
                const currentIndex = environments.indexOf(environment.get());
                environment.set(environments[(currentIndex + 1) % environments.length]);
            }
        },
        [environment]
    );

    useEvent("keydown", onKeyDown);
};
