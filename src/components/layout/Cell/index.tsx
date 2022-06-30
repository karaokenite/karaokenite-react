import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";
import { CellSize } from "../types";

export interface CellProps {
  children: React.ReactNode;
  className?: string;
  size: CellSize;
}

export const Cell = ({ className, children, size }: CellProps) => {
  return (
    <div className={cx(styles.cell, styles[`cell${size}`], className)}>
      {children}
    </div>
  );
};
