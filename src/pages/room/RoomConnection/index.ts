import { useCallback, useEffect, useState, useRef } from "react";

import { AframeEvent } from "@data/events";
import { PersonId } from "@data/types";

import { useRoomContext } from "../RoomContext";
import { createRoomConnection } from "./create";
import { EmitUpdate } from "./emit";

export const globalOnConnectHook = "KaraokeNiteListenToConnection";

export const useRoomConnection = () => {
    const roomContext = useRoomContext();
    const [socket, setSocket] = useState<SocketIOClient.Socket>();
    const pendingEvents = useRef<Parameters<EmitUpdate>[]>([]);

    useEffect(() => {
        const stopListening = () => {
            delete window[globalOnConnectHook];
        };

        window[globalOnConnectHook] = ({ detail: { clientId } }) => {
            const newSocket = NAF.connection.adapter.socket;

            createRoomConnection(roomContext, clientId as PersonId, newSocket);
            stopListening();
            setSocket(NAF.connection.adapter.socket);

            for (const [event, data] of pendingEvents.current) {
                newSocket.emit(event, data);
            }
        };

        return stopListening;
    }, []);

    const emit = useCallback<EmitUpdate>((event, data) => {
        if (socket) {
            socket.emit(event, data);
        } else {
            pendingEvents.current.push([event, data]);
        }
    }, [socket]);

    return emit;
};
