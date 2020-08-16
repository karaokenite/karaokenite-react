import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";
import { Smiley } from "@components/Smiley";
import { Text } from "@components/typography/Text";

export type PersonProps = {
  className?: string;
  host?: boolean;
  index: number;
  username: string;
};

export const Person: React.FC<PersonProps> = ({
  className,
  host,
  index,
  username,
}) => {
  return (
    <li className={cx(styles.person, className)}>
      <Smiley index={index} />
      <Text as="span" className={styles.text} fontSize="md">
        {username} {host && <strong>(host)</strong>}
      </Text>
    </li>
  );
};
