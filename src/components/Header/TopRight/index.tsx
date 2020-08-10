import cx from "classnames";
import Link from "next/link";
import React from "react";

import { Text } from "../../typography/Text";
import { GitHubCorner } from "../GitHubCorner";
import { HeaderTheme } from "../types";
import styles from "./styles.module.scss";

export type TopRightProps = {
  className?: string;
  theme: HeaderTheme;
};

export const TopRight: React.FC<TopRightProps> = ({ className, theme }) => {
  return (
    <div className={cx(styles.topRight, className)}>
      <Link href="/about" passHref>
        <Text as="a" className={cx(styles.about, styles[theme])} fontSize="sm">
          About
        </Text>
      </Link>
      <GitHubCorner href="https://github.com/karaokenite" theme={theme} />
    </div>
  );
};
