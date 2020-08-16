import cx from "classnames";
import React from "react";

import { Key } from "@components/typography/Key";
import { Text } from "@components/typography/Text";

import styles from "./styles.module.scss";

export type ControlsNoticeProps = {
  className?: string;
};

export const ControlsNotice: React.FC<ControlsNoticeProps> = ({
  className,
}) => {
  return (
    <div className={cx(styles.controlsNotice, className)}>
      <Text as="div" className={styles.text} fontSize="xs">
        <Key>w</Key>
        <Key>a</Key>
        <Key>s</Key>
        <Key>d</Key> to move. <Key>space</Key> to change the scenery. Drag the
        mouse to look around. Currently, only host can control the buttons.
      </Text>
    </div>
  );
};
