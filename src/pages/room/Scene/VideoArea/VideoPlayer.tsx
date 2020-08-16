import { Entity as AREntity } from "aframe-react";
import React, { useEffect } from "react";

import { allSongs } from "@data/songs";

import { useRoomContext } from "../../RoomContext";

const getVideo = () =>
  document.getElementById("html-video") as HTMLVideoElement | null;

const useEffectOnVideo = (
  effect: (video: HTMLVideoElement) => void,
  deps: unknown[]
) => {
  useEffect(() => {
    const video = getVideo();
    if (video) {
      effect(video);
    }
  }, deps);
};

export const VideoPlayer: React.FC = () => {
  const { currentSongIndex, playing, songs, volume } = useRoomContext();

  useEffectOnVideo(
    (video: HTMLVideoElement) => {
      if (playing.get()) {
        video.play();
      } else {
        video.pause();
      }
    },
    [playing.get()]
  );

  useEffectOnVideo(
    (video) => {
      video.volume = volume.get();
    },
    [volume.get()]
  );

  useEffectOnVideo(
    (video) => {
      const currentSongIndexValue = currentSongIndex.get();
      if (currentSongIndexValue === undefined) {
        return;
      }

      video.setAttribute(
        "src",
        allSongs[songs.get()[currentSongIndexValue]].audio
      );
      video.play();
    },
    [currentSongIndex.get()]
  );

  return (
    <>
      <AREntity
        position="0.8 2 -0.8"
        scale="1.0 1.0 1.0"
        text="value: WELCOME!!!; color: #BBB; font: monoid;"
      />

      <AREntity id="video" position="0 1.6 -1" scale="2 0.9 1">
        <AREntity
          class="front"
          material="side:front"
          primitive="a-video"
          src="#html-video"
          video-sync
        />
        <AREntity
          class="back"
          material="color:red;side:front"
          primitive="a-plane"
          rotation="0 180 0"
          text="align:center;wrapCount:8;value: Hooray, MVP!!!"
        />
      </AREntity>
    </>
  );
};
