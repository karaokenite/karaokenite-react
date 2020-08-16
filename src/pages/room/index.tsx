import { useRouter } from "next/router";
import React from "react";

import { RoomContainer } from "./RoomContainer";
import { RoomGate } from "./RoomGate";

export default function Room() {
  const { query } = useRouter();
  if (!query.room || !query.username) {
    return <RoomGate />;
  }

  return (
    <RoomContainer
      settings={{
        host: !!query.host,
        room: query.room as string,
        username: query.username as string,
      }}
    />
  );
}
