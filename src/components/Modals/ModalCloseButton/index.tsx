import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type ModalCloseButtonProps = {
  className?: string;
  onClick: () => void;
};

export const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  ModalCloseButtonProps
>(({ className, onClick }, ref) => {
  return (
    <button
      aria-label="Close modal"
      className={cx(styles.modalCloseButton, className)}
      onClick={onClick}
      ref={ref}
    >
      <span aria-hidden>×</span>
    </button>
  );
});
