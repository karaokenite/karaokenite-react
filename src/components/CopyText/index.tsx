import cx from "classnames";
import React, { useState, useEffect } from "react";

import { Input } from "@components/forms/Input";
import { HiddenText } from "@components/HiddenText";
import { Button } from "@components/Button";
import styles from "./styles.module.scss";

export interface CopyTextProps {
  className?: string;
  text: string;
}

export const CopyText = ({ className, text }: CopyTextProps) => {
  const [copied, setCopied] = useState<string>();

  useEffect(() => {
    setCopied(undefined);
  }, [text]);

  return (
    <div className={cx(styles.copyText, className)}>
      <Input className={styles.input} readOnly value={text} />
      {copied && (
        <span aria-live="polite" className={styles.copyNotice}>
          <HiddenText>{copied}</HiddenText>
        </span>
      )}
      <Button
        className={styles.copy}
        onClick={() => {
          navigator.clipboard
            .writeText(text)
            .then(() => setCopied("Copied text"))
            .catch(() => setCopied("Failed to copy text"));
        }}
        variant="yellow"
      >
        Copy
      </Button>
    </div>
  );
};
