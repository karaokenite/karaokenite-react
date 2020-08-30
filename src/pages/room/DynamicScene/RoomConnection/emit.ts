import React, { useContext } from "react";

import { KaraokeEvent } from "@shared/events";
import { DataForEventType } from "@shared/types";

export type EmitUpdate = <EventType extends KaraokeEvent>(
  event: EventType,
  data: Partial<DataForEventType<EventType>>
) => void;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const EmitContext = React.createContext<EmitUpdate>(null!);

export const useEmitContext = () => useContext(EmitContext);
