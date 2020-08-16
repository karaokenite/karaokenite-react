import cx from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";
import { Heading } from "@components/typography/Heading";

export type HeaderLogoProps = {
  className?: string;
  theme: string;
};

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ className, theme }) => {
  return (
    <div className={cx(styles.headerLogo, styles[theme], className)}>
      <Heading as="h1" className={styles.heading} fontSize="md">
        <Link href="/">
          <a className={styles.link}>Karaoke Nite</a>
        </Link>
        <span className={styles.beta}>beta</span>
      </Heading>
    </div>
  );
};
