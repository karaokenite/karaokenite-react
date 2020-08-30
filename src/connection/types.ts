import { PersonId, RoomData, RoomPerson } from "@shared/types";

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
}>;

export type ClientPerson = Readonly<{
  /**
   * Socket ID of this client instance.
   */
  id: PersonId;

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

export type RoomContextData = AsGettersAndSetters<RoomContextValueTypes>;

export type RoomContextValue = RoomContextData & {
  emitRoomData: (newRoomData: Partial<RoomData>) => void;
};
