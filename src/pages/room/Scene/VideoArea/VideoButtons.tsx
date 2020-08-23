import React from "react";

import { KaraokeEvent } from "@data/events";

import { useEmitContext } from "../../RoomConnection/emit";
import { useRoomContext } from "../../RoomContext";
import { VideoButton } from "./VideoButton";

export const VideoButtons: React.FC = () => {
  const { songIndex, songs, playing, volume } = useRoomContext();
  const emit = useEmitContext();

  return (
    <>
      <VideoButton
        id="play-pause-button"
        events={{
          click: () => {
            const newPlaying = !playing.get();

            playing.set(newPlaying);
            emit(KaraokeEvent.JukeboxUpdated, { playing: newPlaying });
          },
        }}
        position="-0.4 1 -1"
        src={playing.get() ? "#pause" : "#play"}
      />

      <VideoButton
        id="next-button"
        events={{
          click: () => {
            const newSongIndex = (songIndex.get() + 1) % songs.get().length;

            songIndex.set(newSongIndex);
            emit(KaraokeEvent.JukeboxUpdated, { songIndex: newSongIndex });
          },
        }}
        position="-0.1 1 -1"
        src="#next"
      />

      <VideoButton
        id="previous-button"
        events={{
          click: () => {
            const newSongIndex = Math.max(songIndex.get() - 1, 0);

            songIndex.set(newSongIndex);
            emit(KaraokeEvent.JukeboxUpdated, { songIndex: newSongIndex });
          },
        }}
        position="-0.7 1 -1"
        src="#previous"
      />

      <VideoButton
        id="volume-low-button"
        events={{
          click: () => {
            const newVolume = Math.max(volume.get() - 0.25, 0);

            volume.set(newVolume);
            emit(KaraokeEvent.JukeboxUpdated, { volume: newVolume });
          },
        }}
        opacity={volume.get() === 0 ? 0.5 : 1}
        position="0.4 1 -1"
        src="#volume-low"
      />

      <VideoButton
        id="volume-high-button"
        events={{
          click: () => {
            const newVolume = Math.min(volume.get() + 0.25, 1);

            volume.set(newVolume);
            emit(KaraokeEvent.JukeboxUpdated, { volume: newVolume });
          },
        }}
        opacity={volume.get() === 1 ? 0.5 : 1}
        position="0.7 1 -1"
        src="#volume-high"
      />
    </>
  );
};
