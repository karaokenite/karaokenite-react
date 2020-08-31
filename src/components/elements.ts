import { Entity } from "aframe";
import { mapValues } from "lodash";

import * as constants from "./constants";
import { getElementById, querySelector } from "./queries";

export const environmentElement = querySelector<Entity>(
  constants.environmentSelector
);

export const sceneElement = querySelector<Entity>(constants.sceneSelector);

export const videoElement = getElementById<Entity & HTMLVideoElement>(
  constants.videoElementId
);

export const controls = mapValues(constants.controlIds, getElementById);
