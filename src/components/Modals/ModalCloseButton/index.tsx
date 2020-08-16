import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type ModalCloseButtonProps = {
  className?: string;
  onClick: () => void;
};

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  className,
  onClick,
}) => {
  return (
    <button
      aria-label="Close modal"
      className={cx(styles.modalCloseButton, className)}
      onClick={onClick}
    >
      <span aria-hidden>×</span>
    </button>
  );
};
