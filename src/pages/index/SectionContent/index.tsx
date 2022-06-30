import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContent = ({
  children,
  className,
}: SectionContentProps) => {
  return <div className={cx(styles.sectionContent, className)}>{children}</div>;
};
