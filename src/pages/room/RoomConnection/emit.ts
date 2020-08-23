import React, { useContext } from "react";

import { KaraokeEvent } from "@data/events";
import { DataForEventType } from "@data/types";

export type EmitUpdate = <EventType extends KaraokeEvent>(
    event: EventType,
    data: Partial<DataForEventType<EventType>>,
) => void;

export const EmitContext = React.createContext<EmitUpdate>(null!);

export const useEmitContext = () => useContext(EmitContext);
