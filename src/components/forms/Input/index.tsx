import cx from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ children, className, ...props }: InputProps) => {
  return (
    <input className={cx(className, styles.input)} {...props}>
      {children}
    </input>
  );
};
