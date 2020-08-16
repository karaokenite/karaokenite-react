export type RoomPerson = {
    host?: boolean;
    username: string;
};

export type RoomContextValueTypes = {
    currentSong: number | undefined;
    environment: string;
    host: boolean;
    otherPeople: RoomPerson[];
    playing: boolean;
    roomName: string;
    songs: string[];
    username: string;
    volume: number;
}

export type GetterAndSetter<Value> = {
    get: () => Value;
    set: (newValue: Value) => void;
};

export type AsGettersAndSetters<Values> = {
    [Key in keyof Values]: GetterAndSetter<Values[Key]>;
}

export type RoomContextValue = AsGettersAndSetters<RoomContextValueTypes>;
