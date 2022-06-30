import cx from "classnames";
import React, { useRef } from "react";
import ReactModal from "react-modal";

import { CloseButton } from "@components/CloseButton";
import { modalsElementId } from "@components/constants";

import styles from "./styles.module.scss";

export interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, className, isOpen, onClose }: ModalProps) => {
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
      <CloseButton
        className={styles.closeButton}
        label="Close modal"
        onClick={onClose}
        ref={closeButton}
        size="large"
      />
      {children}
    </ReactModal>
  );
};
