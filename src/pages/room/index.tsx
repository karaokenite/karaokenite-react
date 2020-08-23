import { useRouter } from "next/router";
import React from "react";

import { RoomContainer } from "./RoomContainer";
import { RoomGate } from "./RoomGate";

export default function Room() {
  const {
    query: { host, room, username },
  } = useRouter();
  if (typeof room !== "string" || typeof username !== "string") {
    return <RoomGate />;
  }

  return (
    <RoomContainer
      settings={{
        host: !!host,
        username,
        room,
      }}
    />
  );
}
