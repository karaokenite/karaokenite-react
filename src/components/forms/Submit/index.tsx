import cx from "classnames";
import React from "react";

import { Input } from "../Input";
import styles from "./styles.module.scss";

export type SubmitProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Submit: React.FC<SubmitProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input className={cx(className, styles.submit)} type="submit" {...props}>
      {children}
    </Input>
  );
};
