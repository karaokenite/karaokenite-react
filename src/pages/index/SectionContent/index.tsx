import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type SectionContentProps = {
  className?: string;
};

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className,
}) => {
  return <div className={cx(styles.sectionContent, className)}>{children}</div>;
};
