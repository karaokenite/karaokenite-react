import React from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HeaderLogo } from "@components/HeaderLogo";
import { useModals } from "@components/Modals/useModals";

import { PeopleIndicator } from "./PeopleIndicator";
import styles from "./styles.module.scss";
import { headModals } from "./modals";

export const RoomHead: React.FC = () => {
  const [modalNodes, setModal] = useModals(headModals);

  return (
    <>
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
      {modalNodes}
    </>
  );
};
