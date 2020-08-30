import { KaraokeEvent } from "@shared/events";
import { RoomDataUpdatedData, SetUsernameData } from "@shared/types";

import { ServerRegistration } from "../types";

export const karaokeEvents = ({
  io,
  log,
  person,
  room,
  socket,
}: ServerRegistration) => {
  socket.on(KaraokeEvent.RoomDataHydration, () => {
    log(`Hydrating room data: ${JSON.stringify(room.data)}`);
    socket.emit(KaraokeEvent.RoomDataHydration, room.data);
  });

  socket.on(KaraokeEvent.UsernameSet, ({ username }: SetUsernameData) => {
    log(`Setting username to '${username}'.`);
    person.username = username;

    io.in(room.name).emit(KaraokeEvent.OccupantsUpdated, {
      occupants: Array.from(room.occupants.values()),
    });

    io.in(room.name).emit(KaraokeEvent.RoomDataUpdated, room.data);
  });

  socket.on(KaraokeEvent.RoomDataUpdated, (data: RoomDataUpdatedData) => {
    log(`Updated jukebox: ${JSON.stringify(data)}`);

    room.data = { ...room.data, ...data };
    io.in(room.name).emit(KaraokeEvent.RoomDataUpdated, room.data);
  });
};
