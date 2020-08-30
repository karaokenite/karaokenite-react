import { useEffect, useState } from "react";
import { RoomData } from "@shared/types";
import { KaraokeEvent } from "@shared/events";

export const useRoomDataConnection = (socket: SocketIOClient.Socket) => {
  const [roomData, setRoomData] = useState<RoomData>();

  useEffect(() => {
    const disconnect = () => {
      socket.off(KaraokeEvent.RoomDataHydration, receiveRoomData);
    };

    const receiveRoomData = (data: RoomData) => {
      setRoomData(data);
      disconnect();
    };

    setRoomData(undefined);
    socket.emit(KaraokeEvent.RoomDataHydration);
    socket.on(KaraokeEvent.RoomDataHydration, receiveRoomData);

    return disconnect;
  }, [socket]);

  return roomData;
};
