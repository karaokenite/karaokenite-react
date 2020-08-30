import { RoomData } from "./types";
import { defaultSongIndex } from "./songs";

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
