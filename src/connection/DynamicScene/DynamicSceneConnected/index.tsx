import React, { useCallback } from "react";

import { RoomData, RoomSettings, PersonId } from "@shared/types";

import { EmitContext, EmitUpdate } from "../../EmitContext";
import { RoomContext } from "../../RoomContext";
import { useRoomContextData } from "./useRoomContextData";
import { useRoomDataSyncing } from "./useRoomDataSyncing";
import { useEmitRoomData } from "./useEmitRoomData";

export interface DynamicSceneConnectedProps {
  children: React.ReactNode;
  roomData: RoomData;
  settings: RoomSettings;
  socket: SocketIOClient.Socket;
}

export const DynamicSceneConnected = ({
  children,
  roomData,
  settings,
  socket,
}: DynamicSceneConnectedProps) => {
  // This emit is a small, well-typed (via `EmitUpdate`) wrapper around `socket.emit`.
  // It's passed to `EmitContext` consumers to let them send messages to the server.
  const emit = useCallback<EmitUpdate>(
    (event, data) => {
      socket.emit(event, data);
    },
    [socket]
  );

  // We next set up context data for the room by initializing React state for it.
  // This sets up those pieces of granular state as members of an object.
  const roomContextData = useRoomContextData(
    socket.id as PersonId,
    roomData,
    settings
  );

  // Linking the two together, we now can make a general `emitRoomData` helper function.
  // It'll emit room data updates to the server *and* update our React state.
  const emitRoomData = useEmitRoomData(emit, roomContextData.roomData);
  const roomContextValue = {
    ...roomContextData,
    emitRoomData,
    originalRoomData: roomData,
  };

  // Finally, we use the socket to subscribe to any room data updates from the server.
  // They'll be applied automatically for us to the room data stored as React state.
  useRoomDataSyncing(roomContextValue, socket);

  return (
    <EmitContext.Provider value={emit}>
      <RoomContext.Provider value={roomContextValue}>
        {children}
      </RoomContext.Provider>
    </EmitContext.Provider>
  );
};
