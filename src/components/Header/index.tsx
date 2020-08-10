import React from "react";

import styles from "./styles.module.scss";
import { TopRight } from "./TopRight";
import { HeaderTheme } from "./types";

export type HeaderProps = {
  theme: HeaderTheme;
};

export const Header: React.FC<HeaderProps> = ({ children, theme }) => {
  return (
    <header className={styles.header}>
      {children}
      <TopRight className={styles.topRight} theme={theme} />
    </header>
  );
};
