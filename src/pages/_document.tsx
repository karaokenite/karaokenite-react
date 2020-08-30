import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

import { RoomBody } from "./room/RoomBody";

export type KaraokeNiteDocumentProps = DocumentProps & {
  room: boolean;
};

export default class KaraokeNiteDocument extends Document<
  KaraokeNiteDocumentProps
> {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);

    return {
      ...initialProps,
      room: context.pathname === "/room",
    };
  }

  render() {
    const { room } = this.props;

    const script = (src: string) => (
      <script async={!room} key={src} src={src}></script>
    );

    return (
      <Html>
        <Head>
          {[
            "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.slim.js",
            "https://cdnjs.cloudflare.com/ajax/libs/aframe/1.0.4/aframe.min.js",
            "https://unpkg.com/networked-aframe@^0.7.0/dist/networked-aframe.js",
            "https://unpkg.com/aframe-randomizer-components@3.0.1/dist/aframe-randomizer-components.min.js",
            "https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js",
          ].map(script)}
        </Head>
        <body>
          {room && (
            <>
              <RoomBody />
              <script src="/js/schemas.js" />
            </>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
