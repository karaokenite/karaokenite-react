import { RoomPerson } from "@data/types";

export type RoomContextValueTypes = {
    connected: boolean;
    currentSongIndex: number;
    environment: string;
    host: boolean;
    otherPeople: RoomPerson[];
    person: ClientRoomPerson;
    playing: boolean;
    roomName: string;
    songs: number[];
    volume: number;
}

/**
 * Client equivalent of the RoomPerson type.
 * 
 * @remarks
 * id isn't assigned until the server sends one down. 
 */
export type ClientRoomPerson = {
    id?: string;
    username: string;
}

export type GetterAndSetter<Value> = {
    get: () => Value;
    set: (newValue: Value) => void;
};

export type AsGettersAndSetters<Values> = {
    [Key in keyof Values]: GetterAndSetter<Values[Key]>;
}

export type RoomContextValue = AsGettersAndSetters<RoomContextValueTypes>;
