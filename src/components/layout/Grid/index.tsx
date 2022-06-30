import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export const Grid = ({ children, className }: GridProps) => {
  return <div className={cx(styles.grid, className)}>{children}</div>;
};
