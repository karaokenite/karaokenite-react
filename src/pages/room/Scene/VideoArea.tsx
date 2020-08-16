import React from "react";

export const VideoArea: React.FC = () => {
  return (
    <>
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

      {/* Welcome text */}
      <a-entity
        text="value: WELCOME!!!; color: #BBB; font: monoid;"
        position="0.8 2 -0.8"
        scale="1.0 1.0 1.0"
      ></a-entity>
    </>
  );
};
