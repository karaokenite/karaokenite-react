import React, { useEffect } from "react";
import ReactModal from "react-modal";

import { rootElementId, modalsElementId } from "@components/constants";
import { BaseHead } from "@components/meta/BaseHead";
import { useModals } from "@components/Modals/useModals";
import { DynamicScene } from "@connection/DynamicScene";
import { RoomSettings } from "@shared/types";

import { roomModals } from "./Modals";
import { RoomBottom } from "./RoomBottom";
import { RoomEvents } from "./RoomEvents";
import { RoomHead } from "./RoomHead";

export interface RoomContainerProps {
  settings: RoomSettings;
}

export const RoomContainer = ({ settings }: RoomContainerProps) => {
  const [modalNodes, setModal] = useModals(roomModals);

  useEffect(() => {
    ReactModal.setAppElement(`#${rootElementId}`);
  }, []);

  return (
    <>
      <div id={rootElementId}>
        <BaseHead title={`${settings.room} |`} />
      </div>
      <div id={modalsElementId} />
      <DynamicScene settings={settings}>
        <RoomHead setModal={setModal} />
        <RoomBottom setModal={setModal} />
        {modalNodes}
        <RoomEvents />
      </DynamicScene>
    </>
  );
};
