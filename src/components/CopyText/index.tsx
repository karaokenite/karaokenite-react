import cx from "classnames";
import React, { useState, useEffect } from "react";

import { Input } from "@components/forms/Input";
import { HiddenText } from "@components/HiddenText";
import { Button } from "@components/Button";
import styles from "./styles.module.scss";

export type CopyTextProps = {
  className?: string;
  text: string;
};

export const CopyText: React.FC<CopyTextProps> = ({ className, text }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [text]);

  return (
    <div className={cx(styles.copyText, className)}>
      <Input className={styles.input} readOnly value={text} />
      {copied && (
        <span aria-live="polite" className={styles.copyNotice}>
          <HiddenText>Copied text</HiddenText>
        </span>
      )}
      <Button
        className={styles.copy}
        onClick={async () => {
          await navigator.clipboard.writeText(text);
          setCopied(true);
        }}
        variant="yellow"
      >
        Copy
      </Button>
    </div>
  );
};
