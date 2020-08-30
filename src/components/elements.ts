import { mapValues } from "lodash";

import { controlIds, sceneSelector, videoElementId } from "./constants";
import { getElementById, querySelector } from "./queries";
import { Entity } from "aframe";

export const sceneElement = querySelector<Entity>(sceneSelector);

export const videoElement = getElementById<Entity & HTMLVideoElement>(
  videoElementId
);

export const controls = mapValues(controlIds, getElementById);
