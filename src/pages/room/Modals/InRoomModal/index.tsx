import React from "react";

import { Button } from "@components/Button";
import { Modal } from "@components/Modals/Modal";
import { Heading } from "@components/typography/Heading";
import { Text } from "@components/typography/Text";

import { RoomModalProps } from "../types";
import { PeopleList } from "./PeopleList";
import styles from "./styles.module.scss";

export const InRoomModal = ({ isOpen, onClose, setModal }: RoomModalProps) => {
  return (
    <Modal
      className={styles.inviteFriendsModal}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Heading as="h2" className={styles.heading} fontSize="xl">
        Who&apos;s in this room:
      </Heading>
      <PeopleList className={styles.peopleList} />
      <Text as="p" className={styles.explanation} fontSize="xs">
        The more the merrier. Why not make it a party?
      </Text>
      <Button
        className={styles.option}
        onClick={() => setModal("inviteFriends")}
        variant="yellow"
      >
        Invite Friends
      </Button>
    </Modal>
  );
};
