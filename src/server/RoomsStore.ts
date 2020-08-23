import { PersonId, RoomName, RoomPerson } from "@data/types";

export type ServerRoom = {
    name: RoomName;

    /**
     * People in the room, keyed by id.
     */
    occupants: Map<PersonId, RoomPerson>;
};

export class RoomsStore {
    /**
     * Names of rooms mapped to their storage.
     */
    readonly #roomsByName = new Map<RoomName, ServerRoom>();

    join(roomName: RoomName, person: RoomPerson) {
        const existingRoom = this.#roomsByName.get(roomName);

        if (existingRoom) {
            existingRoom.occupants.set(person.id, person);
            return existingRoom;
        }

        const newRoom = {
            name: roomName,
            occupants: new Map([
                [person.id, person]
            ]),
        }

        this.#roomsByName.set(roomName, newRoom);

        return newRoom;
    }

    leave(personId: PersonId, room: ServerRoom) {
        room.occupants.delete(personId);

        if (room.occupants.size === 0) {
            this.#roomsByName.delete(room.name);
        }
    }
}