import React, { useContext } from "react";

import { RoomContextValue } from "./types";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const RoomContext = React.createContext<RoomContextValue>(null!);

export const useRoomContext = () => useContext(RoomContext);
