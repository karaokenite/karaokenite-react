import cx from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export interface RadioButtonProps extends React.HTMLAttributes<HTMLElement> {
  defaultChecked?: boolean;
  id: string;
  name: string;
}

export const RadioButton = ({
  className,
  defaultChecked,
  children,
  id,
  name,
  ...props
}: RadioButtonProps) => {
  return (
    <label className={cx(className, styles.radioButton)} {...props}>
      <input defaultChecked={defaultChecked} id={id} name={name} type="radio" />
      {children}
    </label>
  );
};
