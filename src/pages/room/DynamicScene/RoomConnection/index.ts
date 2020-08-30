import { useCallback, useEffect, useState, useRef } from "react";

import { globalOnConnectHook } from "@components/constants";
import { sceneElement } from "@components/elements";
import { PersonId } from "@shared/types";

import { useRoomContext } from "../../RoomContext";
import { createRoomConnection } from "./create";
import { EmitUpdate } from "./emit";

export const useRoomConnection = () => {
  const roomContext = useRoomContext();
  const roomName = roomContext.roomName.get();
  const [socket, setSocket] = useState<SocketIOClient.Socket>();
  const pendingEvents = useRef<Parameters<EmitUpdate>[]>([]);

  useEffect(() => {
    const stopListening = () => {
      delete window[globalOnConnectHook];
    };

    window[globalOnConnectHook] = ({ detail: { clientId } }) => {
      const newSocket = NAF.connection.adapter.socket;

      createRoomConnection(roomContext, clientId as PersonId, newSocket);
      setSocket(newSocket);
      stopListening();

      for (const [event, data] of pendingEvents.current) {
        newSocket.emit(event, data);
      }

      pendingEvents.current = [];
    };

    sceneElement.setAttribute("networked-scene", {
      adapter: "webrtc",
      audio: "true",
      onConnect: globalOnConnectHook,
      room: roomName,
      serverURL: `:3001`,
    });

    return stopListening;
  }, [roomContext, roomName]);

  const emit = useCallback<EmitUpdate>(
    (event, data) => {
      if (socket) {
        socket.emit(event, data);
      } else {
        pendingEvents.current.push([event, data]);
      }
    },
    [socket]
  );

  return emit;
};
