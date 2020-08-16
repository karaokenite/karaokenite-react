import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactModal from "react-modal";

import { modalsElementId, rootElementId } from "@components/constants";
import { BaseHead } from "@components/meta/BaseHead";

import { RoomBottom } from "./RoomBottom";
import { RoomContext, useRoomContextValue } from "./RoomContext";
import { RoomHead } from "./RoomHead";
import { Scene } from "./Scene";

export default function Room() {
  const router = useRouter();
  const roomContextValue = useRoomContextValue(router.query);
  const title = `${roomContextValue.roomName.get() || "Room"} |`;

  useEffect(() => {
    ReactModal.setAppElement(`#${rootElementId}`);
  }, []);

  return (
    <RoomContext.Provider value={roomContextValue}>
      <div id={rootElementId}>
        <BaseHead title={title} />
        <Scene />
      </div>
      <div id={modalsElementId} />
      <RoomHead />
      <RoomBottom />
    </RoomContext.Provider>
  );
}
