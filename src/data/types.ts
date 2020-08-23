export type SongData = {
    audio: string;
    artist: string;
    index: number;
    title: string;
    visual: string;
}

export type RoomPerson = {
    host?: boolean;
    id: PersonId;
    username: string;
};

export type RoomJoinData = {
    roomName: RoomName;
    person: RoomPerson;
};

export type RoomUpdateData = {
    roomName: RoomName;
    people: RoomPerson[];
};

// Nominal types let us use primitives without accidentally switching them.
// For example, something that takes a room ID string shouldn't allow passing a person ID.

export type Nominal<Brand extends string> = string & {
    /**
     * This member doesn't *actually* exist; we're using it to let TypeScript
     * tell us when we've mixed up our nominal types.
     */
    __brand: Brand;
}

export type PersonId = Nominal<'Person'>;

export type RoomName = Nominal<'Room'>;
