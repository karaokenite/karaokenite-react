import { useState } from "react";

import { RoomPerson, PersonId, RoomData, RoomSettings } from "@shared/types";

const useGetterAndSetter = <Value>(value: Value) => {
  const [stateValue, set] = useState(value);

  return {
    get: () => stateValue,
    set,
  };
};

/**
 * Given the initial starting "room data" for a room, creates React state for each piece.
 * Each piece is stored as a .get() to update its value and a .set() to write a new one.
 */
export const useRoomContextData = (
  id: PersonId,
  roomData: RoomData,
  settings: RoomSettings
) => {
  return {
    client: useGetterAndSetter({ id, username: settings.username }),
    occupants: useGetterAndSetter<ReadonlyMap<PersonId, RoomPerson>>(new Map()),
    roomData: useGetterAndSetter(roomData),
    roomName: useGetterAndSetter(settings.room),
  };
};
