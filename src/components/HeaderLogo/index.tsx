import cx from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";
import { Heading } from "@components/typography/Heading";

export type HeaderLogoProps = {
  className?: string;
};

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ className }) => {
  return (
    <div className={cx(styles.headerLogo, className)}>
      <Heading as="h1" className={styles.heading} fontSize="md">
        <Link href="/">
          <a className={styles.link}>Karaoke Nite</a>
        </Link>
        <span className={styles.beta}>beta</span>
      </Heading>
    </div>
  );
};
