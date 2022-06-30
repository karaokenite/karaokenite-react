import cx from "classnames";
import React from "react";

import { Text } from "@components/typography/Text";
import { SongData } from "@shared/types";

import styles from "./styles.module.scss";

export interface SongSelectorProps {
  className?: string;
  data: SongData;
  onSelect: () => void;
  selected?: boolean;
}

export const SongSelector = ({
  className,
  data,
  onSelect,
  selected,
}: SongSelectorProps) => {
  return (
    <div className={className}>
      <button
        aria-label={`${data.title} by ${data.artist}`}
        className={cx(styles.songSelector, selected && styles.selected)}
        onClick={onSelect}
        type="button"
      >
        <img alt="" className={styles.visual} src={data.visual} />
        <Text aria-hidden as="span" className={styles.title} fontSize="sm">
          {data.title}
        </Text>
        <Text aria-hidden as="span" className={styles.artist} fontSize="sm">
          {data.artist}
        </Text>
      </button>
    </div>
  );
};
