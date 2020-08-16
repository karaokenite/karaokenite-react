import React from "react";
import ReactModal from "react-modal";

import { ModalCloseButton } from "../ModalCloseButton";
import { ModalComponentProps } from "../types";

import styles from "./styles.module.scss";
import { modalsElementId } from "@components/constants";

export const Modal: React.FC<ModalComponentProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <ReactModal
      className={styles.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      parentSelector={() => document.getElementById(modalsElementId)!}
    >
      <ModalCloseButton className={styles.closeButton} onClick={onClose} />
      {children}
    </ReactModal>
  );
};
