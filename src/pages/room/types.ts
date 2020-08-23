import { PersonId, RoomPerson } from "@data/types";

export type RoomContextValueTypes = Readonly<{
    /**
     * Known values of the local person.
     */
    client: ClientPerson;

    currentSongIndex: number;
    environment: string;

    /**
     * All people, including the local person, in the same room.
     */
    occupants: ReadonlyMap<PersonId, RoomPerson>;

    playing: boolean;
    roomName: string;
    songs: readonly number[];
    volume: number;
}>;

export type ClientPerson = Readonly<{
    /**
     * @remarks Only set after the networked scene is set up from the server.
     */
    id?: string;

    username: string;
}>;

export type GetterAndSetter<Value> = {
    get: () => Value;
    set: (newValue: Value) => void;
};

export type AsGettersAndSetters<Values> = {
    [Key in keyof Values]: GetterAndSetter<Values[Key]>;
}

export type RoomContextValue = AsGettersAndSetters<RoomContextValueTypes>;
