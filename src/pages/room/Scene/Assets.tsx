import React from "react";

export const Assets: React.FC = () => {
  return (
    <a-assets>
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
    </a-assets>
  );
};
