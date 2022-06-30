import { useEffect, useState } from "react";

import { getSceneElement } from "@components/elements";
import { socketPort } from "@shared/ports";

const globalOnConnectHook = "KaraokeNiteListenToConnection";

/**
 * Initializes the Networked-Aframe (NAF) scene and captures its
 * Socket.IO client connection in React state.
 */
export const useRoomConnection = (roomName: string) => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  // This registers a global listener function for when NAF connects,
  // storing the connection socket in React state.
  useEffect(() => {
    // We'll call this when we no longer want to listen for the global connection.
    // That happens after we capture the socket *or* this effect is disposed by React.
    const stopListening = () => {
      delete window[globalOnConnectHook];
    };

    // Store a function on window under the const key to be called by NAF when ready.
    // This will store NAF's socket in React state, then delete this global listener.
    window[globalOnConnectHook] = () => {
      setSocket(NAF.connection.adapter.socket);
      stopListening();
    };

    // Per NAF's documentation (https://github.com/networked-aframe/networked-aframe),
    // we set the scene element to be a "networked-scene" to initialize NAF.
    // The `onConnect` setting tells it to call the global function under that name when ready.
    getSceneElement().setAttribute("networked-scene", {
      adapter: "webrtc",
      debug: process.env.NODE_ENV === "development",
      onConnect: globalOnConnectHook,
      room: roomName,
      serverURL: `:${socketPort}`,
    });

    return stopListening;
  }, [roomName]);

  return socket;
};
