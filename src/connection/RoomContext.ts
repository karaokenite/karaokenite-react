import { mapValues } from "lodash";
import React, { useContext, useState } from "react";

import { defaultRoomData } from "@shared/rooms";
import { RoomPerson, PersonId, RoomQuery } from "@shared/types";

import { RoomContextValue, RoomContextValueTypes } from "./types";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const RoomContext = React.createContext<RoomContextValue>(null!);

const useGetterAndSetter = <Value>(value: Value) => {
  const [stateValue, set] = useState(value);

  return {
    get: () => stateValue,
    set,
  };
};

export const useRoomContextValue = ({
  room,
  username,
}: RoomQuery): RoomContextValue => {
  return {
    client: useGetterAndSetter({ username }),
    occupants: useGetterAndSetter<ReadonlyMap<PersonId, RoomPerson>>(new Map()),
    roomData: useGetterAndSetter(defaultRoomData),
    roomName: useGetterAndSetter(room),
  };
};

export const useRoomContext = () => useContext(RoomContext);

export const useRoomContextValues = () => {
  const roomContext = useRoomContext();

  return mapValues(roomContext, (value) =>
    value.get()
  ) as RoomContextValueTypes;
};
