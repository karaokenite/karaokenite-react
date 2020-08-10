import cx from "classnames";
import React from "react";

import { Text } from "../Text";
import { BasicTextProps } from "../types";
import styles from "./styles.module.scss";

export type AnchorProps = BasicTextProps<"a">;

export const Anchor: React.FC<AnchorProps> = ({ className, ...props }) => {
  return <Text as="a" className={cx(className, styles.anchor)} {...props} />;
};
