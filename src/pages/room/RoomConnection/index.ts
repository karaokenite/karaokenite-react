import socketio from 'socket.io-client';
import { useEffect } from 'react';

import { RoomEvent } from '@data/events';
import { socketPort } from '@data/ports';
import { RoomUpdateData } from '@data/types';

import { RoomContextValue } from "../types";

export const useRoomConnection = (roomContextValue: RoomContextValue) => {
    useEffect(() => {
        const io = socketio(`:${socketPort}`);

        io.on('connect', () => {
            const person = {
                ...roomContextValue.person.get(),
                id: io.id,
            };

            roomContextValue.connected.set(true);
            roomContextValue.person.set(person);

            io.emit(RoomEvent.Join, {
                person,
                roomName: roomContextValue.roomName.get(),
            });

            io.on(RoomEvent.Update, (data: RoomUpdateData) => {
                roomContextValue.otherPeople.set(
                    data.people.filter(person => person.id !== io.id)
                )
            });
        });

        return () => {
            roomContextValue.connected.set(false);
            io.disconnect();
        }
    }, [])
}