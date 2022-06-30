import React from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HeaderLogo } from "@components/HeaderLogo";

import { SetRoomModal } from "../Modals/types";
import { PeopleIndicator } from "./PeopleIndicator";
import styles from "./styles.module.scss";

export interface RoomHeadProps {
  setModal: SetRoomModal;
}

export const RoomHead = ({ setModal }: RoomHeadProps) => {
  return (
    <Header className={styles.header}>
      <HeaderLogo theme="light" />
      <div className={styles.options}>
        <PeopleIndicator onClick={() => setModal("inRoom")} />
        <Button
          className={styles.option}
          onClick={() => setModal("inviteFriends")}
          variant="white"
        >
          Invite Friends
        </Button>
        <Button
          className={styles.option}
          onClick={() => setModal("addSong")}
          variant="yellow"
        >
          Add Song
        </Button>
      </div>
    </Header>
  );
};
