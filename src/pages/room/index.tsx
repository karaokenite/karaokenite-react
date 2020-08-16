import { useRouter } from "next/router";
import React from "react";

import { BaseHead } from "@components/meta/BaseHead";

import { RoomBottom } from "./RoomBottom";
import { RoomContext, useRoomContextValue } from "./RoomContext";
import { RoomHead } from "./RoomHead";
import { Scene } from "./Scene";

export default function Room() {
  const router = useRouter();
  const roomContextValue = useRoomContextValue(router.query);
  const title = `${roomContextValue.roomName.get() || "Room"} |`;

  return (
    <RoomContext.Provider value={roomContextValue}>
      <BaseHead title={title} />
      <Scene />
      <RoomHead />
      <RoomBottom />
    </RoomContext.Provider>
  );
}
