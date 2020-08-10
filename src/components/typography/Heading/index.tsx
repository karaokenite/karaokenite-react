import cx from "classnames";
import React from "react";

import { Text } from "../Text";
import { TextPropsAs } from "../types";
import styles from "./styles.module.scss";

export type HeadingProps = TextPropsAs<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export const Heading: React.FC<HeadingProps> = ({ className, ...props }) => {
  return <Text className={cx(styles.heading, className)} {...props} />;
};
