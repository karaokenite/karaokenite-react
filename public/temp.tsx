import Head from "next/head";
import React from "react";

import styles from "./styles.module.scss";

export const Scene: React.FC = () => {
  return (
    <>
      <Head>
        {/* <script src="/scripts/video-sync.js"></script> */}
        {/* <script src="/scripts/host.js"></script> */}
        {/* <script src="/scripts/dynamic-room.js"></script> */}
        {/* <script src="/scripts/scene.js"></script> */}
        <script src="/scripts/registrations.js"></script>
      </Head>
      <div className={styles.scene}>
        <div id="host" />
        <div id="counter" />
        <div id="roomName" />

        <a-scene dynamic-room>
          {/* Asset Management System */}

          <a-assets>
            <img
              id="keyboard-image"
              src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsk-basic.png?v=1590379712131"
              crossOrigin="anonymous"
            />

            {/* Buttons */}

            <img
              id="play"
              src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fplay.png?v=1589407864805"
              crossOrigin="anonymous"
            />
            <img
              id="pause"
              src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fpause.png?v=1589407941269"
              crossOrigin="anonymous"
            />

            <img
              id="next"
              src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fnext.png?v=1589407819880"
              crossOrigin="anonymous"
            />
            <img
              id="previous"
              src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fprevious.png?v=1589407813380"
              crossOrigin="anonymous"
            />

            <img
              id="volume-low"
              src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fvolume1.png?v=1589410578173"
              crossOrigin="anonymous"
            />
            <img
              id="volume-high"
              src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fvolume2.png?v=1589410579945"
              crossOrigin="anonymous"
            />

            {/* Grid and sky */}

            <img
              id="grid"
              src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png"
              crossOrigin="anonymous"
            />
            <img
              id="sky"
              src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg"
              crossOrigin="anonymous"
            />

            {/* Templates (Added in A-Frame's <a-assets> tag) */}

            {/* Because this video needs crossorigin etc., we need to use  
             a-video src with selector, not a-plane material src string. */}

            {/* <video
              id="html-video"
              src="https://cdn.glitch.com/bf4db82b-cdcf-4019-a281-153f8e3d1e9f%2Fletsgetitonencoded.mp4?v=1588473010045"
            ></video> */}

            {/* Video template */}

            {/* <template id="video-template">
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
            </template> */}

            {/* Avatar template */}

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
                    ></a-sphere>
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
                    ></a-sphere>{" "}
                  </a-sphere>
                  s
                </a-entity>
              </a-entity>
            </template>

            {/* /Templates */}
          </a-assets>

          <a-entity environment="preset: osiris"></a-entity>

          <a-entity
            id="player"
            host
            networked="template: #avatar-template; attachTemplateToLocal: false;"
            camera
            position="0 1.3 0"
            spawn-in-circle="radius:1"
            wasd-controls
            look-controls
            animation="property: object3D.position.y; to: 1.45; dir: alternate; dur: 1000; loop: true"
          >
            <a-entity class="nametag"></a-entity>

            <a-sphere class="head" visible="false" random-color></a-sphere>
          </a-entity>

          {/* Play / Pause buttons */}

          <a-image
            id="videoControls"
            src="#play"
            position="-0.4 1 -1"
            scale="0.2 0.2 1"
            play-pause
            animation__mouseenter="property: scale; to: 0.27 0.27 1; dur: 300; startEvents: mouseenter"
            animation__mouseleave="property: scale; to: 0.2 0.2 1; dur: 300; startEvents: mouseleave"
          ></a-image>

          {/* Next button */}

          <a-image
            id="videoControls2"
            src="#next"
            position="-0.1 1 -1"
            scale="0.2 0.2 1"
            next
            animation__mouseenter="property: scale; to: 0.27 0.27 1; dur: 300; startEvents: mouseenter"
            animation__mouseleave="property: scale; to: 0.2 0.2 1; dur: 300; startEvents: mouseleave"
          ></a-image>

          {/* Previous button */}

          <a-image
            id="previous-button"
            src="#previous"
            position="-0.7 1 -1"
            scale="0.2 0.2 1"
            previous
            animation__mouseenter="property: scale; to: 0.27 0.27 1; dur: 300; startEvents: mouseenter"
            animation__mouseleave="property: scale; to: 0.2 0.2 1; dur: 300; startEvents: mouseleave"
          ></a-image>

          {/* Volume Low button */}

          <a-image
            id="volume-low-button"
            src="#volume-low"
            position="0.4 1 -1"
            scale="0.2 0.2 1"
            volume-low
            animation__mouseenter="property: scale; to: 0.27 0.27 1; dur: 300; startEvents: mouseenter"
            animation__mouseleave="property: scale; to: 0.2 0.2 1; dur: 300; startEvents: mouseleave"
          ></a-image>

          {/* Volume High button */}

          <a-image
            id="volume-high-button"
            src="#volume-high"
            position="0.7 1 -1"
            scale="0.2 0.2 1"
            volume-high
            animation__mouseenter="property: scale; to: 0.27 0.27 1; dur: 300; startEvents: mouseenter"
            animation__mouseleave="property: scale; to: 0.2 0.2 1; dur: 300; startEvents: mouseleave"
          ></a-image>

          {/* Camera and Cursor */}

          <a-camera>{/* 			  <a-cursor color="#FAFAFA"></a-cursor> */}</a-camera>

          {/* Sky and Snow */}

          <a-sky src="#sky" rotation="0 -90 0"></a-sky>

          {/*       <a-entity id="particles" particle-system="preset: snow"></a-entity>
           */}

          <a-entity
            text="value: WELCOME!!!; color: #BBB; font: monoid;"
            position="0.8 2 -0.8"
            scale="1.0 1.0 1.0"
          >
            {/*         <a-entity
          text="value: Welcome!!; color: #BBB; font: monoid;"
          position="0 0.06 0"
          scale="1.0 1.0 1.0"
        >
        </a-entity> */}
            {/*         <a-entity slice9="width: 2; left:0.1; padding: 0.1; opacity: 0.5; transparent: true;" position="0.8 2 -0.8"></a-entity>
             */}
          </a-entity>

          {/* Keyboard */}

          <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>

          {/* Change hand to `hand` for VR. */}
          {/*     <a-entity id="keyboard" super-keyboard="hand: #mouseCursor1; imagePath:https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsk-basic.png?v=1590379712131" position="0 1 -0.5" rotation="-30 0 0"></a-entity>
           */}
        </a-scene>
      </div>
    </>
  );
};
