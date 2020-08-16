import cx from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: "white" | "yellow";
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
