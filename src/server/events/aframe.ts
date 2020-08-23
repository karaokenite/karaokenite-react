import { AframeEvent, KaraokeEvent } from "@data/events";
import { SendData, BroadcastData } from "@data/types";

import { ServerRegistration } from "../types";

export const aframeEvents = ({ io, person, room, socket }: ServerRegistration) => {
    socket.emit(AframeEvent.ConnectSuccess, person);

    io.in(room.name).emit(AframeEvent.OccupantsChanged, { occupants: Object.fromEntries(room.occupants) });

    socket.on(AframeEvent.Send, (data: SendData) => {
        io.to(data.to).emit(AframeEvent.Send, data);
    });

    socket.on(AframeEvent.Broadcast, (data: BroadcastData) => {
        socket.to(room.name).emit(AframeEvent.Broadcast, data);
    });
};
