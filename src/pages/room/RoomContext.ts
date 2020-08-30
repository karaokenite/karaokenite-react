import { mapValues } from "lodash";
import React, { useContext, useState } from "react";

import { defaultRoomData } from "@shared/rooms";
import { defaultSongIndex } from "@shared/songs";
import { RoomPerson, PersonId } from "@shared/types";

import { RoomContextValue, RoomContextValueTypes } from "./types";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const RoomContext = React.createContext<RoomContextValue>(null!);

const useGetterAndSetter = <Value>(value: Value) => {
  const [stateValue, set] = useState(value);

  const values = React.useMemo(
    () => ({
      get: () => stateValue,
      set,
    }),
    [stateValue]
  );

  return values;
};

export type RoomContextSettings = {
  username: string;
  room: string;
};

export const useRoomContextValue = ({
  room,
  username,
}: RoomContextSettings): RoomContextValue => {
  return {
    occupants: useGetterAndSetter<ReadonlyMap<PersonId, RoomPerson>>(new Map()),
    client: useGetterAndSetter({ username }),
    roomData: useGetterAndSetter(defaultRoomData),
    roomName: useGetterAndSetter(room),
    songs: useGetterAndSetter<readonly number[]>([defaultSongIndex]),
  };
};

export const useRoomContext = () => useContext(RoomContext);

export const useRoomContextValues = () => {
  const roomContext = useRoomContext();

  return mapValues(roomContext, (value) =>
    value.get()
  ) as RoomContextValueTypes;
};
