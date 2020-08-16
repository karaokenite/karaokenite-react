import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

const assets = [
  require("./assets/smiley-pink.svg").default,
  require("./assets/smiley-purple.svg").default,
  require("./assets/smiley-lime.svg").default,
  require("./assets/smiley-cyan.svg").default,
  require("./assets/smiley-orange.svg").default,
];

export type SmileyProps = {
  className?: string;
  index: number;
};

export const Smiley: React.FC<SmileyProps> = ({ className, index }) => {
  return (
    <img
      className={cx(styles.smiley, className)}
      src={assets[index % assets.length]}
    />
  );
};
