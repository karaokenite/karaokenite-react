export type RoomPerson = {
    host?: boolean;
    username: string;
};

export type RoomContextValueTypes = {
    host: boolean;
    otherPeople: RoomPerson[];
    roomName: string;
    songs: string[];
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
