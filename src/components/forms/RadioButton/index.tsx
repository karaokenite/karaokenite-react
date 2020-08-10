import cx from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export type RadioButtonProps = React.HTMLAttributes<HTMLElement> & {
  defaultChecked?: boolean;
  id: string;
  name: string;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  defaultChecked,
  children,
  id,
  name,
  ...props
}) => {
  return (
    <label className={cx(className, styles.radioButton)} {...props}>
      <input defaultChecked={defaultChecked} id={id} name={name} type="radio" />
      {children}
    </label>
  );
};
