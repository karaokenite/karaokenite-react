import cx from "classnames";
import React from "react";

import { Key } from "@components/typography/Key";
import { Text } from "@components/typography/Text";

import styles from "./styles.module.scss";
import { CloseButton } from "@components/CloseButton";

export interface ControlsNoticeProps {
  className?: string;
  onDismiss: () => void;
}

export const ControlsNotice = ({
  className,
  onDismiss,
}: ControlsNoticeProps) => {
  return (
    <div className={cx(styles.controlsNotice, className)}>
      <Text as="div" className={styles.text} fontSize="xs">
        <CloseButton
          className={styles.controlsButton}
          label="Dismiss controls"
          onClick={onDismiss}
          size="small"
        />
        <Key>w</Key>
        <Key>a</Key>
        <Key>s</Key>
        <Key>d</Key> to move. <Key>space</Key> to change the scenery. Drag the
        mouse to look around.
      </Text>
    </div>
  );
};
