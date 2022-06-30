import { Entity } from "aframe";
import { mapValues } from "lodash";

import * as constants from "./constants";
import { getElementById, querySelector } from "./queries";

const cacheGetter = <T>(getter: () => T) => {
  let value: T;

  return () => (value ??= getter());
};

export const getEnvironmentElement = cacheGetter(() =>
  querySelector<Entity>(constants.environmentSelector)
);

export const getSceneElement = cacheGetter(() =>
  querySelector<Entity>(constants.sceneSelector)
);

export const getVideoElement = cacheGetter(() =>
  getElementById<Entity & HTMLVideoElement>(constants.videoElementId)
);

export const getControls = cacheGetter(() =>
  mapValues(constants.controlIds, getElementById)
);
