import type { KaraokeEvent } from "./events";

/**
 * Query parameters required to launch a room.
 */
export interface RoomSettings {
  room: string;
  username: string;
}

export interface RoomPerson {
  id: PersonId;

  joinedTime: number;

  username?: string;
}

export interface SongData {
  audio: string;
  artist: string;
  index: number;
  title: string;
  visual: string;
}

/**
 * General "jukebox" data about a room's karaoke experience.
 */
export interface RoomData {
  /**
   * Last known video playback time.
   */
  currentTime: number;

  /**
   * Which environment scene is being shown in the background.
   */
  environment: string;

  /**
   * Client ID of the last person to trigger the play button.
   */
  player?: PersonId;

  /**
   * Whether the current song is playing.
   */
  playing: boolean;

  /**
   * Which song is shown/played.
   */
  songIndex: number;

  /**
   * Songs queued up in the jukebox.
   */
  songs: number[];

  /**
   * How loud the song's audio is.
   */
  volume: number;
}

// NAF native events

export interface BroadcastData {
  broadcasting: true;
  data: unknown;
  from: string;
  type: string;
}

export interface JoinRoomData {
  room: RoomName;
}

export interface SendData {
  to: string;
  [i: string]: unknown;
}

// Karaoke Nite events

export type RoomDataUpdatedData = Partial<RoomData>;

export interface OccupantsUpdatedData {
  occupants: RoomPerson[];
}

export interface SetUsernameData {
  username: string;
}

// Fancy event-to-event-type mappings

export interface EventDataTypes {
  [KaraokeEvent.RoomDataUpdated]: RoomDataUpdatedData;
  [KaraokeEvent.OccupantsUpdated]: OccupantsUpdatedData;
  [KaraokeEvent.UsernameSet]: SetUsernameData;
}

export type DataForEventType<EventType> = EventType extends keyof EventDataTypes
  ? EventDataTypes[EventType]
  : never;

// Nominal types let us use primitives without accidentally switching them.
// For example, something that takes a room ID string shouldn't allow passing a person ID.

export type Nominal<Brand extends string> = string & {
  /**
   * This member doesn't *actually* exist; we're using it to let TypeScript
   * tell us when we've mixed up our nominal types.
   */
  __brand: Brand;
};

export type PersonId = Nominal<"Person">;

export type RoomName = Nominal<"Room">;
