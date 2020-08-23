import React, { useEffect } from "react";
import ReactModal from "react-modal";

import { rootElementId, modalsElementId } from "@components/constants";
import { BaseHead } from "@components/meta/BaseHead";
import { useModals } from "@components/Modals/useModals";

import { RoomBottom } from "../RoomBottom";
import { useRoomConnection } from "../RoomConnection";
import {
  useRoomContextValue,
  RoomContext,
  RoomContextSettings,
} from "../RoomContext";
import { RoomHead } from "../RoomHead";
import { Scene } from "../Scene";
import { roomModals } from "../Modals";

export type RoomContainerProps = {
  settings: RoomContextSettings;
};

export const RoomContainer: React.FC<RoomContainerProps> = ({ settings }) => {
  const roomContextValue = useRoomContextValue(settings);
  const [modalNodes, setModal] = useModals(roomModals);
  const title = `${roomContextValue?.roomName.get() || "Room"} |`;

  useEffect(() => {
    ReactModal.setAppElement(`#${rootElementId}`);
  }, []);

  useRoomConnection(roomContextValue);

  return (
    <RoomContext.Provider value={roomContextValue}>
      <div id={rootElementId}>
        <BaseHead title={title} />
        <Scene />
      </div>
      <div id={modalsElementId} />
      <RoomHead setModal={setModal} />
      <RoomBottom setModal={setModal} />
      {modalNodes}
    </RoomContext.Provider>
  );
};
