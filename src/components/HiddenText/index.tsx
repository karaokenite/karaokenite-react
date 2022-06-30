import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export const HiddenText = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <span className={cx(styles.hiddenText, className)} {...props}>
      {children}
    </span>
  );
};
