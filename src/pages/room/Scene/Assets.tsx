import React from "react";

export const Assets: React.FC = () => {
  return (
    <a-assets>
      {/* Buttons */}

      <img
        crossOrigin="anonymous"
        id="play"
        src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fplay.png?v=1589407864805"
      />
      <img
        crossOrigin="anonymous"
        id="pause"
        src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fpause.png?v=1589407941269"
      />

      <img
        crossOrigin="anonymous"
        id="next"
        src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fnext.png?v=1589407819880"
      />
      <img
        crossOrigin="anonymous"
        id="previous"
        src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fprevious.png?v=1589407813380"
      />

      <img
        crossOrigin="anonymous"
        id="volume-low"
        src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fvolume1.png?v=1589410578173"
      />
      <img
        crossOrigin="anonymous"
        id="volume-high"
        src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fvolume2.png?v=1589410579945"
      />

      <video
        crossOrigin="anonymous"
        id="html-video"
        src="https://cdn.glitch.com/bf4db82b-cdcf-4019-a281-153f8e3d1e9f%2Fletsgetitonencoded.mp4?v=1588473010045"
      ></video>
    </a-assets>
  );
};
