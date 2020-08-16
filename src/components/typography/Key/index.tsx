import React from "react";

import styles from "./styles.module.scss";

export const Key: React.FC = ({ children }) => {
  return <kbd className={styles.key}>{children}</kbd>;
};
