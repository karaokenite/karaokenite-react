import { isEqual } from "lodash";

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

    // We declare a new "player" for the room if they're saying to play while paused.
    const newPlayer =
      data.playing && !room.data.playing ? person.id : room.data.player;

    const newData = {
      ...room.data,
      ...data,

      // Ignore currentTime updates from any client who didn't click the play button.
      // This is a somewhat arbitrary measure to stop "currentTime battles", wherein
      // two clients go back and forth sending vastly different times to each other.
      currentTime:
        newPlayer === person.id
          ? data.currentTime ?? room.data.currentTime
          : room.data.currentTime,
      player: newPlayer,
    };

    if (isEqual(room.data, newData)) {
      return;
    }

    room.data = newData;
    io.in(room.name).emit(KaraokeEvent.RoomDataUpdated, newData);
  });

  // todo: when a player leaves, they should no longer be the player on the server
};
