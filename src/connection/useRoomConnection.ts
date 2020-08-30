import { useEffect, useState } from "react";

import { sceneElement } from "@components/elements";

const globalOnConnectHook = "KaraokeNiteListenToConnection";

export const useRoomConnection = (roomName: string) => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  useEffect(() => {
    const stopListening = () => {
      delete window[globalOnConnectHook];
    };

    window[globalOnConnectHook] = () => {
      const newSocket = NAF.connection.adapter.socket;

      setSocket(newSocket);
      stopListening();
    };

    sceneElement.setAttribute("networked-scene", {
      adapter: "webrtc",
      audio: "true",
      debug: process.env.NODE_ENV === "development",
      onConnect: globalOnConnectHook,
      room: roomName,
      serverURL: `:3001`,
    });

    return stopListening;
  }, [roomName]);

  return socket;
};
