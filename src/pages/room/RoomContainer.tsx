import React, { useEffect } from "react";
import ReactModal from "react-modal";

import { rootElementId, modalsElementId } from "@components/constants";
import { BaseHead } from "@components/meta/BaseHead";
import { useModals } from "@components/Modals/useModals";

import { DynamicScene } from "./DynamicScene";
import { roomModals } from "./Modals";
import { RoomBottom } from "./RoomBottom";
import {
  useRoomContextValue,
  RoomContext,
  RoomContextSettings,
} from "./RoomContext";
import { RoomHead } from "./RoomHead";

export type RoomContainerProps = {
  settings: RoomContextSettings;
};

export const RoomContainer: React.FC<RoomContainerProps> = ({ settings }) => {
  const roomContextValue = useRoomContextValue(settings);
  const [modalNodes, setModal] = useModals(roomModals);

  useEffect(() => {
    ReactModal.setAppElement(`#${rootElementId}`);
  }, []);

  return (
    <RoomContext.Provider value={roomContextValue}>
      <DynamicScene />
      <div id={rootElementId}>
        <BaseHead title={`${settings.room} |`} />
      </div>
      <div id={modalsElementId} />
      <RoomHead setModal={setModal} />
      <RoomBottom setModal={setModal} />
      {modalNodes}
    </RoomContext.Provider>
  );
};
