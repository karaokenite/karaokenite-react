import { Entity as AREntity } from "aframe-react";
import React from "react";

import { useRoomContext } from "../../RoomContext";
import { VideoPlayer } from "./VideoPlayer";

const mouseEnter =
  "property: scale; to: 0.27 0.27 1; dur: 300; startEvents: mouseenter";

const mouseLeave =
  "property: scale; to: 0.2 0.2 1; dur: 300; startEvents: mouseleave";

export const VideoArea: React.FC = () => {
  const { currentSong, songs, playing, volume } = useRoomContext();

  return (
    <>
      <AREntity
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="play-pause-button"
        events={{
          click: () => playing.set(!playing.get()),
        }}
        play-pause
        position="-0.4 1 -1"
        primitive="a-image"
        scale="0.2 0.2 1"
        src={playing.get() ? "#pause" : "#play"}
      />

      <AREntity
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="next-button"
        next
        events={{
          click: () => {
            const songsValue = songs.get();
            if (songsValue.length === 0) {
              return;
            }

            currentSong.set(((currentSong.get() ?? 0) + 1) % songsValue.length);
          },
        }}
        position="-0.1 1 -1"
        primitive="a-image"
        scale="0.2 0.2 1"
        src="#next"
      />

      <AREntity
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="previous-button"
        onClick={() =>
          currentSong.set(Math.max((currentSong.get() ?? 0) - 1, 0))
        }
        position="-0.7 1 -1"
        primitive="a-image"
        previous
        scale="0.2 0.2 1"
        src="#previous"
      />

      <AREntity
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="volume-low-button"
        events={{
          click: () => volume.set(Math.max(volume.get() - 0.25, 0)),
        }}
        primitive="a-image"
        position="0.4 1 -1"
        scale="0.2 0.2 1"
        src="#volume-low"
        volume-low
      />

      <AREntity
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="volume-high-button"
        events={{
          click: () => volume.set(Math.min(volume.get() + 0.25, 1)),
        }}
        primitive="a-image"
        position="0.7 1 -1"
        scale="0.2 0.2 1"
        src="#volume-high"
        volume-high
      />

      <VideoPlayer />
    </>
  );
};
