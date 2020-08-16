import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return <header className={cx(styles.header, className)}>{children}</header>;
};
