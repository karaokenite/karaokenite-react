import { useEffect } from "react";

import { useRoomContext } from "@connection/RoomContext";
import { nametagElement } from "@components/elements";

export const usePlayerSync = () => {
  const { client } = useRoomContext();
  const { username } = client.get();

  useEffect(() => {
    nametagElement.setAttribute("text", "value", username);
  }, [username]);
};
