import React from "react";

import { Raw } from "./Raw";

export const Templates: React.FC = () => {
  return (
    <>
      <Raw
        html={`
<template id="avatar-template">
  <a-entity class="avatar" networked-audio-source>
    <a-entity
      class="nametag"
      text="value: Hello World; align:center;"
      position="0 0.7 0"
      rotation="0 180 0"
      scale="8 8 8"
    ></a-entity>
    <a-sphere
      class="head"
      color="#5985ff"
      scale="0.45 0.5 0.4"
      random-color
    ></a-sphere>
    <a-entity class="face" position="0 0.05 0">
      <a-sphere
        class="eye"
        color="#efefef"
        position="0.16 0.1 -0.35"
        scale="0.12 0.12 0.12"
      >
        <a-sphere
          class="pupil"
          color="#000"
          position="0 0 -1"
          scale="0.2 0.2 0.2"
        />
      </a-sphere>
      <a-sphere
        class="eye"
        color="#efefef"
        position="-0.16 0.1 -0.35"
        scale="0.12 0.12 0.12"
      >
        <a-sphere
          class="pupil"
          color="#000"
          position="0 0 -1"
          scale="0.2 0.2 0.2"
        />
      </a-sphere>
    </a-entity>
  </a-entity>
</template>
`}
      />
      <Raw
        html={`
<template id="video-template">
 <a-entity scale="2 0.9 1">
  <a-video
    video-sync
    class="front"
    material="side:front"
    src="#html-video"
  ></a-video>
  <a-plane
    class="back"
    rotation="0 180 0"
    material="color:red;side:front"
    text="align:center;wrapCount:8;value: MVP is live!"
  ></a-plane>
  </a-entity>
</template>`}
      />
    </>
  );
};
