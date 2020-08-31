import { defaultSongIndex } from "./songs";
import { RoomData } from "./types";

export const environments = [
  "osiris",
  "contact",
  "forest",
  "yavapai",
  "arches",
];

export const defaultRoomData: RoomData = {
  currentTime: 0,
  environment: environments[0],
  playing: false,
  songIndex: 0,
  songs: [defaultSongIndex],
  volume: 1,
};
