import React, { useContext, useState } from 'react';

import { environments } from '@data/environments';
import { defaultSongIndex } from '@data/songs';
import { RoomPerson } from '@data/types';

import { RoomContextValue } from './types';

export const RoomContext = React.createContext<RoomContextValue>(null!);

const useGetterAndSetter = <Value>(value: Value) => {
    const [stateValue, set] = useState(value);

    return {
        get: () => stateValue,
        set,
    }
}

export type RoomContextSettings = {
    host?: boolean;
    username: string;
    room: string;
}

export const useRoomContextValue = ({ host, room, username }: RoomContextSettings): RoomContextValue => {
    return {
        connected: useGetterAndSetter<boolean>(false),
        currentSongIndex: useGetterAndSetter(0),
        environment: useGetterAndSetter(environments[0]),
        host: useGetterAndSetter(!!host),
        otherPeople: useGetterAndSetter<RoomPerson[]>([]),
        person: useGetterAndSetter({ username }),
        playing: useGetterAndSetter<boolean>(false),
        roomName: useGetterAndSetter(room),
        songs: useGetterAndSetter([
            defaultSongIndex,
        ]),
        volume: useGetterAndSetter(1),
    }
};

export const useRoomContext = () => useContext(RoomContext);