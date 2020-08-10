import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";
import { CellSize } from "../types";

export type CellProps = {
  className?: string;
  size: CellSize;
};

export const Cell: React.FC<CellProps> = ({ className, children, size }) => {
  return (
    <div className={cx(styles.cell, styles[`cell${size}`], className)}>
      {children}
    </div>
  );
};
