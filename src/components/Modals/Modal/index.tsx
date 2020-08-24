import cx from "classnames";
import React, { useRef } from "react";
import ReactModal from "react-modal";

import { ModalCloseButton } from "../ModalCloseButton";

import styles from "./styles.module.scss";
import { modalsElementId } from "@components/constants";

export type ModalProps = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
}) => {
  const closeButton = useRef<HTMLButtonElement>(null);

  return (
    <ReactModal
      className={cx(styles.modal, className)}
      isOpen={isOpen}
      onAfterOpen={() => {
        closeButton.current?.focus();
      }}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      parentSelector={() => document.querySelector(`#${modalsElementId}`)}
    >
      <ModalCloseButton
        className={styles.closeButton}
        onClick={onClose}
        ref={closeButton}
      />
      {children}
    </ReactModal>
  );
};
