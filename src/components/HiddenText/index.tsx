import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type HiddenTextProps = React.HTMLAttributes<Element> & {
  as: keyof JSX.IntrinsicElements;
};

export const HiddenText: React.FC<HiddenTextProps> = ({
  as: As,
  children,
  className,
  ...props
}) => {
  return (
    <As className={cx(styles.hiddenText, className)} {...props}>
      {children}
    </As>
  );
};
