import React from "react";

import styles from "./styles.module.scss";

export interface KeyProps {
  children: React.ReactNode;
}

export const Key = ({ children }: KeyProps) => {
  return <kbd className={styles.key}>{children}</kbd>;
};
