import { map, mapValues } from 'lodash';
import React, { useContext, useState } from 'react';

import { environments } from '@data/environments';
import { defaultSongIndex } from '@data/songs';
import { RoomPerson, PersonId } from '@data/types';

import { RoomContextValue, RoomContextValueTypes } from './types';

export const RoomContext = React.createContext<RoomContextValue>(null!);

const useGetterAndSetter = <Value>(value: Value) => {
    const [stateValue, set] = useState(value);

    return {
        get: () => stateValue,
        set,
    }
};

export type RoomContextSettings = {
    username: string;
    room: string;
};

export const createRoomContextValue = ({ room, username }: RoomContextSettings): RoomContextValue => {
    return {
        environment: useGetterAndSetter(environments[0]),
        occupants: useGetterAndSetter<ReadonlyMap<PersonId, RoomPerson>>(new Map()),
        client: useGetterAndSetter({ username }),
        playing: useGetterAndSetter<boolean>(false),
        roomName: useGetterAndSetter(room),
        songs: useGetterAndSetter<readonly number[]>([
            defaultSongIndex,
        ]),
        songIndex: useGetterAndSetter(0),
        volume: useGetterAndSetter(1),
    }
};

export const useRoomContext = () => useContext(RoomContext);

export const useRoomContextValues = () => {
    const roomContext = useRoomContext();

    return mapValues(roomContext, value => value.get()) as RoomContextValueTypes;
}
