import { mapValues } from "lodash";

import { controlIds, videoElementId } from "./constants";
import { getElementById } from "./queries";
import { Entity } from "aframe";

export const videoElement = getElementById<Entity>(videoElementId);

export const controls = mapValues(controlIds, getElementById);
