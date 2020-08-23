import { PersonId, RoomData, RoomPerson } from "@data/types";

export type RoomContextValueTypes = Readonly<{
  /**
   * Known values of the local person.
   */
  client: ClientPerson;

  /**
   * All people, including the local person, in the same room.
   */
  occupants: ReadonlyMap<PersonId, RoomPerson>;

  roomData: RoomData;

  roomName: string;

  songs: readonly number[];
}>;

export type ClientPerson = Readonly<{
  /**
   * @remarks Only set after the networked scene is set up from the server.
   */
  id?: string;

  username: string;
}>;

export type GetterAndSetter<Value> = {
  get: Getter<Value>;
  set: Setter<Value>;
};

export type Getter<Value> = () => Value;

export type Setter<Value> = (newValue: Value) => void;

export type AsGettersAndSetters<Values> = {
  [Key in keyof Values]: GetterAndSetter<Values[Key]>;
};

export type RoomContextValue = AsGettersAndSetters<RoomContextValueTypes>;
