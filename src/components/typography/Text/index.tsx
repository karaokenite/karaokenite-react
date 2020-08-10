import cx from "classnames";
import React from "react";

import { TextPropsAs } from "../types";
import styles from "./styles.module.scss";

const TextComponent = <Element extends string>(
  { as, children, className, fontSize = "md", ...props }: TextPropsAs<Element>,
  ref: React.Ref<HTMLElement>
) => {
  return React.createElement(
    as,
    {
      className: cx(className, styles.text, styles[fontSize]),
      ref,
      ...props,
    },
    children
  );
};

export const Text = React.forwardRef(TextComponent) as <Element extends string>(
  props: React.PropsWithChildren<TextPropsAs<Element>>
) => React.ReactElement | null;
