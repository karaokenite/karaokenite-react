import React from "react";

import { useRoomContext } from "../../RoomContext";
import { VideoButton } from "./VideoButton";

export const VideoButtons: React.FC = () => {
  const { currentSongIndex, songs, playing, volume } = useRoomContext();

  return (
    <>
      <VideoButton
        id="play-pause-button"
        events={{
          click: () => playing.set(!playing.get()),
        }}
        position="-0.4 1 -1"
        src={playing.get() ? "#pause" : "#play"}
      />

      <VideoButton
        id="next-button"
        events={{
          click: () => {
            currentSongIndex.set(
              (currentSongIndex.get() + 1) % songs.get().length
            );
          },
        }}
        position="-0.1 1 -1"
        src="#next"
      />

      <VideoButton
        id="previous-button"
        events={{
          click: () => {
            currentSongIndex.set(Math.max(currentSongIndex.get() - 1, 0));
          },
        }}
        position="-0.7 1 -1"
        src="#previous"
      />

      <VideoButton
        id="volume-low-button"
        events={{
          click: () => volume.set(Math.max(volume.get() - 0.25, 0)),
        }}
        opacity={volume.get() === 0 ? 0.5 : 1}
        position="0.4 1 -1"
        src="#volume-low"
      />

      <VideoButton
        id="volume-high-button"
        events={{
          click: () => volume.set(Math.min(volume.get() + 0.25, 1)),
        }}
        opacity={volume.get() === 1 ? 0.5 : 1}
        position="0.7 1 -1"
        src="#volume-high"
      />
    </>
  );
};
