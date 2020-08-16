import cx from "classnames";
import React from "react";

import { Input } from "@components/forms/Input";
import { RadioGroup } from "@components/forms/RadioGroup";
import { Submit } from "@components/forms/Submit";
import { Heading } from "@components/typography/Heading";

import styles from "./styles.module.scss";

export type CreateRoomProps = { className?: string };

export const CreateRoom: React.FC<CreateRoomProps> = ({ className }) => {
  return (
    <form className={cx(styles.createRoom, className)}>
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
      <RadioGroup
        className={styles.radioGroup}
        initialValue="hosting"
        name="host"
        options={[
          { id: "hosting", label: "Hosting a new room" },
          { id: "joining", label: "Joining a friend's room" },
        ]}
      />
      <Submit className={styles.submit} value="Enter Room" />
    </form>
  );
};
