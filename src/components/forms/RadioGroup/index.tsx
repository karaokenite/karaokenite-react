import cx from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { RadioButton } from "../RadioButton";

export type RadioOption = {
  id: string;
  label: React.ReactNode;
};

export type RadioGroupProps = React.HTMLAttributes<HTMLElement> & {
  initialValue?: string;
  options: RadioOption[];
  name: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  initialValue,
  children,
  name,
  options,
  ...props
}) => {
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
