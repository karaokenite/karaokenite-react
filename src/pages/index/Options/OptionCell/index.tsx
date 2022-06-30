import cx from "classnames";
import React from "react";

import { Cell } from "@components/layout/Cell";
import { Text } from "@components/typography/Text";

import styles from "./styles.module.scss";

export interface OptionCellProps {
  className?: string;
  image: string;
  text: string;
}

export const OptionCell = ({ className, image, text }: OptionCellProps) => {
  return (
    <Cell className={cx(styles.optionCell, className)} size={2}>
      <img alt="" className={styles.image} src={image}></img>
      <Text as="div" fontSize="md">
        {text}
      </Text>
    </Cell>
  );
};
