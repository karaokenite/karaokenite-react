import cx from "classnames";
import React from "react";

import { Input } from "@components/forms/Input";
import { Submit } from "@components/forms/Submit";
import { Heading } from "@components/typography/Heading";

import styles from "./styles.module.scss";

export type CreateRoomProps = { className?: string };

export const CreateRoom: React.FC<CreateRoomProps> = ({ className }) => {
  return (
    <form action="/room" className={cx(styles.createRoom, className)}>
      <Heading as="h2" className={styles.roomHeading} fontSize="lg">
        Join a Private Room
      </Heading>
      <Input
        className={styles.input}
        name="room"
        placeholder="Choose a room name"
      />
      <Input
        className={styles.input}
        name="username"
        placeholder="Choose a username"
      />
      <Submit className={styles.submit} value="Enter Room" />
    </form>
  );
};
