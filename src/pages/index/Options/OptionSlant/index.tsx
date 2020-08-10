import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type OptionSlantProps = {
  className?: string;
};

export const OptionSlant: React.FC<OptionSlantProps> = ({ className }) => {
  return <div className={cx(className, styles.optionSlant)} />;
};
