import { ParsedUrlQuery } from 'querystring';
import React, { useState, useContext } from 'react';

import { RoomContextValue, RoomPerson } from './types';

export const RoomContext = React.createContext<RoomContextValue>(null!);

const useGetterAndSetter = <Value>(value: Value) => {
    const [stateValue, set] = useState(value);

    return {
        get: () => stateValue,
        set,
    }
}

export const useRoomContextValue = (query: ParsedUrlQuery): RoomContextValue => {
    // TODO: It'd be nice to return a new Error if room or username aren't strings...
    return {
        host: useGetterAndSetter(!!query.host),
        otherPeople: useGetterAndSetter<RoomPerson[]>([]),
        roomName: useGetterAndSetter(query.room as string),
        songs: useGetterAndSetter<string[]>([]),
        username: useGetterAndSetter(query.username as string)
    }
};

export const useRoomContext = () => useContext(RoomContext);