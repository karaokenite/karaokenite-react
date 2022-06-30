import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

import smileyPink from "./assets/smiley-pink.svg";
import smileyPurple from "./assets/smiley-purple.svg";
import smileyLime from "./assets/smiley-lime.svg";
import smileyCyan from "./assets/smiley-cyan.svg";
import smileyOrange from "./assets/smiley-orange.svg";

const assets = [smileyPink, smileyPurple, smileyLime, smileyCyan, smileyOrange];

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
