import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type ButtonVariant = "white" | "yellow";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(className, styles.button, styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: ButtonVariant;
}

export const LinkButton = ({
  children,
  className,
  variant,
  ...props
}: LinkButtonProps) => {
  return (
    <a className={cx(className, styles.button, styles[variant])} {...props}>
      {children}
    </a>
  );
};
