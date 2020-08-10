import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type GridProps = {
  className?: string;
};

export const Grid: React.FC<GridProps> = ({ className, children }) => {
  return <div className={cx(styles.grid, className)}>{children}</div>;
};
