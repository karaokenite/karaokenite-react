import { PersonId, RoomName, RoomPerson } from "@data/types";

export type ServerRoom = {
    name: RoomName;

    /**
     * People in the room, keyed by id.
     */
    occupants: Map<PersonId, RoomPerson>;
};

export type PersonAndRoom = {
    person: RoomPerson;
    room: ServerRoom;
}

export class RoomsMap {
    /**
     * IDs of people in the rooms mapped to their room names.
     */
    readonly #people = new Map<PersonId, PersonAndRoom>();

    /**
     * Names of rooms mapped to their storage.
     */
    readonly #rooms = new Map<RoomName, ServerRoom>();

    get(personId: PersonId) {
        return this.#people.get(personId) || new Error(`'${personId}' is not in a room.`);
    }

    join(roomName: RoomName, person: RoomPerson) {
        const previousRoom = this.#people.get(person.id);
        if (previousRoom) {
            this.leave(person.id);
        }

        const existingRoom = this.#rooms.get(roomName);

        if (existingRoom) {
            this.#people.set(person.id, { person, room: existingRoom });
            existingRoom.occupants.set(person.id, person);
            return existingRoom;
        }

        const newRoom = {
            name: roomName,
            occupants: new Map([
                [person.id, person]
            ]),
        }

        this.#people.set(person.id, { person, room: newRoom });
        this.#rooms.set(roomName, newRoom);

        return newRoom;
    }

    leave(personId: PersonId) {
        const pair = this.#people.get(personId);
        if (!pair) {
            return new Error(`Person '${personId}' does not have a room to leave.`);
        }

        const { room } = pair;
        if (!room.occupants.has(personId)) {
            return new Error(`Room '${room.name}' does not contain person '${personId}'.`);
        }

        room.occupants.delete(personId);
        this.#people.delete(personId);

        if (room.occupants.size === 0) {
            this.#rooms.delete(room.name);
        }

        return room;
    }
}