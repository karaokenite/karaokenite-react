import { PersonId, RoomName, RoomPerson } from "@data/types";

export type ServerRoom = {
    name: RoomName;

    /**
     * People in the room, keyed by id.
     */
    people: Map<string, RoomPerson>;
};

export class RoomsMap {
    /**
     * IDs of people in the rooms mapped to their room names.
     */
    readonly #people = new Map<PersonId, ServerRoom>();

    /**
     * Names of rooms mapped to their storage.
     */
    readonly #rooms = new Map<RoomName, ServerRoom>();

    public join(roomName: RoomName, person: RoomPerson) {
        const previousRoom = this.#people.get(person.id);
        if (previousRoom) {
            this.leave(person.id);
        }

        const existingRoom = this.#rooms.get(roomName);

        if (existingRoom) {
            this.#people.set(person.id, existingRoom);
            existingRoom.people.set(person.id, person);
            return existingRoom;
        }

        const newRoom = {
            name: roomName,
            people: new Map([
                [person.id, person]
            ]),
        }

        this.#people.set(person.id, newRoom);
        this.#rooms.set(roomName, newRoom);

        return newRoom;
    }

    public leave(id: PersonId) {
        const room = this.#people.get(id);
        if (!room) {
            return new Error(`Person '${id}' does not have a room to leave.`);
        }

        if (!room.people.has(id)) {
            return new Error(`Room '${room.name}' does not contain person '${id}'.`);
        }

        room.people.delete(id);
        this.#people.delete(id);

        if (room.people.size === 0) {
            this.#rooms.delete(room.name);
        }

        return room;
    }
}