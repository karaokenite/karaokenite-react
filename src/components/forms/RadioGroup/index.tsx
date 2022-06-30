import cx from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { RadioButton } from "../RadioButton";

export interface RadioOption {
  id: string;
  label: React.ReactNode;
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLElement> {
  initialValue?: string;
  options: RadioOption[];
  name: string;
}

export const RadioGroup = ({
  className,
  initialValue,
  name,
  options,
  ...props
}: RadioGroupProps) => {
  return (
    <div className={cx(className, styles.radioGroup)} {...props}>
      {options.map(({ id, label }) => (
        <RadioButton
          className={styles.radioButton}
          defaultChecked={initialValue === id}
          key={id}
          id={id}
          name={name}
        >
          {label}
        </RadioButton>
      ))}
    </div>
  );
};
