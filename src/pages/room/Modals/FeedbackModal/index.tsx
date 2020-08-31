import React from "react";

import { LinkButton } from "@components/Button";
import { Modal } from "@components/Modals/Modal";
import { Heading } from "@components/typography/Heading";
import { Text } from "@components/typography/Text";

import { RoomModalProps } from "../types";
import styles from "./styles.module.scss";

export const FeedbackModal: React.FC<RoomModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal className={styles.feedbackModal} isOpen={isOpen} onClose={onClose}>
      <Heading as="h2" className={styles.heading} fontSize="xl">
        Give us feedback!
      </Heading>
      <Text as="p" fontSize="xs">
        Karaoke Nite is an ongoing project. We're looking to hear your thoughts
        on how to make it even better!
      </Text>
      <LinkButton
        className={styles.link}
        href="https://karaokenite.typeform.com/to/SaHxnvyT"
        variant="yellow"
      >
        Give Feedback
      </LinkButton>
      <LinkButton
        className={styles.link}
        href="https://karaokenite.typeform.com/to/qqQslFgC"
        variant="white"
      >
        Report a Bug
      </LinkButton>
    </Modal>
  );
};
