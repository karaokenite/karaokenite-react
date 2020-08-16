import React from "react";

import { CopyText } from "@components/CopyText";
import { ModalComponentProps } from "@components/Modals/types";
import { Modal } from "@components/Modals/Modal";
import { ShareLinks } from "@components/ShareLinks";
import { Heading } from "@components/typography/Heading";
import { Text } from "@components/typography/Text";

import { useRoomContext } from "../../RoomContext";
import styles from "./styles.module.scss";

export const InviteFriendsModal: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
}) => {
  const { roomName } = useRoomContext();
  const url = `https://karaokenite.co?room=${roomName.get()}`;

  return (
    <Modal
      className={styles.inviteFriendsModal}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Heading as="h2" className={styles.heading} fontSize="xl">
        Invite your friends!
      </Heading>
      <Text as="p" className={styles.explanation} fontSize="xs">
        Send the link to a friend to invite them to this karaoke room.
      </Text>
      <Text as="p" className={styles.roomName} fontSize="xs">
        🔑 Your room name is <strong>{roomName.get()}</strong>.
      </Text>

      <CopyText className={styles.urlArea} text={url} />
      <ShareLinks roomName={roomName.get()} url={url} />
    </Modal>
  );
};
