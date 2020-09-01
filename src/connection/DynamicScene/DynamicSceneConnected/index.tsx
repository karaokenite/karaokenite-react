import React, { useCallback } from "react";

import { RoomData, RoomSettings, PersonId } from "@shared/types";

import { EmitContext, EmitUpdate } from "../../EmitContext";
import { RoomContext } from "../../RoomContext";
import { useRoomContextData } from "./useRoomContextData";
import { useRoomDataSyncing } from "./useRoomDataSyncing";
import { useRoomDataEmit } from "./useRoomDataEmit";

export type DynamicSceneConnectedProps = {
  roomData: RoomData;
  settings: RoomSettings;
  socket: SocketIOClient.Socket;
};

export const DynamicSceneConnected: React.FC<DynamicSceneConnectedProps> = ({
  children,
  roomData,
  settings,
  socket,
}) => {
  // ima document this lol
  const emit = useCallback<EmitUpdate>(
    (event, data) => {
      socket.emit(event, data);
    },
    [socket]
  );

  const roomContextData = useRoomContextData(
    socket.id as PersonId,
    roomData,
    settings
  );

  // ...and definitely this
  const emitRoomData = useRoomDataEmit(emit, roomContextData.roomData);
  const roomContextValue = {
    ...roomContextData,
    emitRoomData,
    originalRoomData: roomData,
  };

  useRoomDataSyncing(roomContextValue, socket);

  return (
    <EmitContext.Provider value={emit}>
      <RoomContext.Provider value={roomContextValue}>
        {children}
      </RoomContext.Provider>
    </EmitContext.Provider>
  );
};
