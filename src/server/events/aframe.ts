import { mapValues } from "lodash";

import { AframeEvent } from "@shared/events";
import { SendData, BroadcastData } from "@shared/types";

import { ServerRegistration } from "../types";

export const aframeEvents = ({
  io,
  person,
  room,
  socket,
}: ServerRegistration) => {
  socket.emit(AframeEvent.ConnectSuccess, person);

  // NAF stores room occupancy as an object from person ID to their joinedTime.
  // Joining a room requires telling all other clients the new occupancy list.
  io.in(room.name).emit(AframeEvent.OccupantsChanged, {
    occupants: mapValues(
      Object.fromEntries(room.occupants),
      (person) => person.joinedTime
    ),
  });

  socket.on(AframeEvent.Broadcast, (data: BroadcastData) => {
    socket.broadcast.emit(AframeEvent.Broadcast, data);
  });

  socket.on(AframeEvent.Send, (data: SendData) => {
    io.to(data.to).emit(AframeEvent.Send, data);
  });
};
