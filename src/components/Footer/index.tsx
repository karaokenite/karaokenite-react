import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cx(styles.footer, className)}>
      Made with{" "}
      <span aria-label="love" role="img">
        💖
      </span>{" "}
      in Brooklyn, NY
    </footer>
  );
};
