import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export interface OptionSlantProps {
  className?: string;
}

export const OptionSlant = ({ className }: OptionSlantProps) => {
  return <div className={cx(className, styles.optionSlant)} />;
};
