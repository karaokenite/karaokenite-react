import cx from "classnames";
import React from "react";

import { Cell } from "@components/layout/Cell";
import { Text } from "@components/typography/Text";

import styles from "./styles.module.scss";

export type OptionCellProps = {
  className?: string;
  image: string;
  text: string;
};

export const OptionCell: React.FC<OptionCellProps> = ({
  className,
  image,
  text,
}) => {
  return (
    <Cell className={cx(styles.optionCell, className)} size={2}>
      <img alt="" className={styles.image} src={image}></img>
      <Text as="div" fontSize="md">
        {text}
      </Text>
    </Cell>
  );
};
