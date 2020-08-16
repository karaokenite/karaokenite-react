import React from "react";

import { useRoomContext } from "../RoomContext";

const mouseEnter =
  "property: scale; to: 0.27 0.27 1; dur: 300; startEvents: mouseenter";

const mouseLeave =
  "property: scale; to: 0.2 0.2 1; dur: 300; startEvents: mouseleave";

export const VideoArea: React.FC = () => {
  const { currentSong, songs, playing, volume } = useRoomContext();

  return (
    <>
      <a-image
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="videoControls"
        onClick={() => {
          playing.set(!playing.get());
        }}
        play-pause
        position="-0.4 1 -1"
        scale="0.2 0.2 1"
        src={playing ? "#pause" : "#play"}
      />

      <a-image
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="next-button"
        next
        onClick={() => {
          const songsValue = songs.get();
          if (songsValue.length === 0) {
            return;
          }

          currentSong.set(((currentSong.get() ?? 0) + 1) % songsValue.length);
        }}
        position="-0.1 1 -1"
        scale="0.2 0.2 1"
        src="#next"
      />

      <a-image
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="previous-button"
        onClick={() =>
          currentSong.set(Math.max((currentSong.get() ?? 0) - 1, 0))
        }
        position="-0.7 1 -1"
        previous
        scale="0.2 0.2 1"
        src="#previous"
      />

      <a-image
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="volume-low-button"
        onClick={() => volume.set(0.5)}
        position="0.4 1 -1"
        scale="0.2 0.2 1"
        src="#volume-low"
        volume-low
      />

      <a-image
        animation__mouseenter={mouseEnter}
        animation__mouseleave={mouseLeave}
        id="volume-high-button"
        onClick={() => volume.set(1)}
        position="0.7 1 -1"
        scale="0.2 0.2 1"
        src="#volume-high"
        volume-high
      />

      <a-entity
        position="0.8 2 -0.8"
        scale="1.0 1.0 1.0"
        text="value: WELCOME!!!; color: #BBB; font: monoid;"
      ></a-entity>
    </>
  );
};
