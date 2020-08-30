import { useEffect, useState } from "react";
import { RoomData } from "@shared/types";
import { KaraokeEvent } from "@shared/events";

export const useRoomDataConnection = (socket: SocketIOClient.Socket) => {
  const [roomData, setRoomData] = useState<RoomData>();

  useEffect(() => {
    const stopListening = () => {
      socket.off(KaraokeEvent.RoomDataHydration, receiveRoomData);
    };

    const receiveRoomData = (data: RoomData) => {
      setRoomData(data);
      stopListening();
    };

    setRoomData(undefined);
    socket.emit(KaraokeEvent.RoomDataHydration);
    socket.on(KaraokeEvent.RoomDataHydration, receiveRoomData);

    return stopListening;
  }, [socket]);

  return roomData;
};
