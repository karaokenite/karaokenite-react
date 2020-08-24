import React from "react";

import { KaraokeEvent } from "@shared/events";
import { RoomData } from "@shared/types";

import { useEmitContext } from "../../RoomConnection/emit";
import { useRoomContext } from "../../RoomContext";
import { VideoButton } from "./VideoButton";

export const VideoButtons: React.FC = () => {
  const emit = useEmitContext();
  const { roomData, songs } = useRoomContext();
  const { playing, songIndex, volume } = roomData.get();

  const createOnClick = (newData: Partial<RoomData>) => {
    return () => {
      roomData.set({ ...roomData.get(), ...newData });
      emit(KaraokeEvent.RoomDataUpdated, newData);
    };
  };

  return (
    <>
      <VideoButton
        id="play-pause-button"
        onClick={createOnClick({
          playing: !playing,
        })}
        position="-0.4 1 -1"
        src={playing ? "#pause" : "#play"}
      />

      <VideoButton
        id="next-button"
        onClick={createOnClick({
          songIndex: (songIndex + 1) % songs.get().length,
        })}
        position="-0.1 1 -1"
        src="#next"
      />

      <VideoButton
        id="previous-button"
        onClick={createOnClick({
          songIndex: Math.max(songIndex - 1, 0),
        })}
        position="-0.7 1 -1"
        src="#previous"
      />

      <VideoButton
        id="volume-low-button"
        onClick={createOnClick({
          volume: Math.max(volume - 0.25, 0),
        })}
        opacity={volume === 0 ? 0.5 : 1}
        position="0.4 1 -1"
        src="#volume-low"
      />

      <VideoButton
        id="volume-high-button"
        onClick={createOnClick({
          volume: Math.min(volume + 0.25, 1),
        })}
        opacity={volume === 1 ? 0.5 : 1}
        position="0.7 1 -1"
        src="#volume-high"
      />
    </>
  );
};
