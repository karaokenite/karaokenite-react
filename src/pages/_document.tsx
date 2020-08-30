import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

import { RoomBody } from "./room/RoomBody";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Todo: asynchronously load these if in the room page */}
          <script src="https://aframe.io/releases/1.0.4/aframe.js"></script>
          <script src="https://unpkg.com/networked-aframe@^0.7.0/dist/networked-aframe.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.slim.js"></script>
          <script src="https://unpkg.com/aframe-super-keyboard@1.0.0/dist/aframe-super-keyboard.js"></script>
          <script src="https://unpkg.com/aframe-randomizer-components@3.0.1/dist/aframe-randomizer-components.min.js"></script>
          <script src="https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"></script>
          <script src="https://unpkg.com/aframe-slice9-component/dist/aframe-slice9-component.min.js"></script>
        </Head>
        <body>
          {/* Todo: only load all this stuff if in the room page */}
          <RoomBody />
          <script src="/js/schemas.js"></script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
