import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";
import { Smiley } from "@components/Smiley";
import { Text } from "@components/typography/Text";

export interface PersonProps {
  className?: string;
  index: number;
  username?: string;
}

export const Person = ({ className, index, username }: PersonProps) => {
  return (
    <li className={cx(styles.person, className)}>
      <Smiley index={index} />
      <Text as="span" className={styles.text} fontSize="md">
        {username}
      </Text>
    </li>
  );
};
