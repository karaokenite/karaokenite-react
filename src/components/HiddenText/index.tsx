import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export const HiddenText: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span className={cx(styles.hiddenText, className)} {...props}>
      {children}
    </span>
  );
};
