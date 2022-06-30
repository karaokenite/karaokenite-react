import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type CloseButtonSize = "small" | "large";

export interface CloseButtonProps {
  className?: string;
  label: string;
  onClick: () => void;
  size: CloseButtonSize;
}

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(({ label, className, onClick, size }, ref) => {
  return (
    <button
      aria-label={label}
      className={cx(styles.closeButton, styles[size], className)}
      onClick={onClick}
      ref={ref}
    >
      <span aria-hidden>×</span>
    </button>
  );
});
