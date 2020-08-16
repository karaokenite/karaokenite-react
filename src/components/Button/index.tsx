import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export type ButtonVariant = "white" | "yellow";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={cx(className, styles.button, styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};

export type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: ButtonVariant;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <a className={cx(className, styles.button, styles[variant])} {...props}>
      {children}
    </a>
  );
};
