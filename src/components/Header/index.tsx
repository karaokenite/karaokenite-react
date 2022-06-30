import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: HeaderProps) => {
  return <header className={cx(styles.header, className)}>{children}</header>;
};
