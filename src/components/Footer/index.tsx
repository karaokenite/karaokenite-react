import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type FooterProps = {
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
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
