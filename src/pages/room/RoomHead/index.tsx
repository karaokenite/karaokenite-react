import React from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HeaderLogo } from "@components/HeaderLogo";

import styles from "./styles.module.scss";
import { PeopleIndicator } from "./PeopleIndicator";

export const RoomHead: React.FC = () => {
  return (
    <Header className={styles.header}>
      <HeaderLogo theme="light" />
      <div className={styles.options}>
        <PeopleIndicator />
        <Button
          className={styles.option}
          onClick={() => alert("friends!")}
          variant="white"
        >
          Invite Friends
        </Button>
        <Button
          className={styles.option}
          onClick={() => "Song!"}
          variant="yellow"
        >
          Add Song
        </Button>
      </div>
    </Header>
  );
};
