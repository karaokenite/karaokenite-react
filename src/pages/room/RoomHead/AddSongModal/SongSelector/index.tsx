import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";
import { SongData } from "@data/types";
import { Text } from "@components/typography/Text";

export type SongSelectorProps = {
  className?: string;
  data: SongData;
  onSelect: () => void;
  selected?: boolean;
};

export const SongSelector: React.FC<SongSelectorProps> = ({
  className,
  data,
  onSelect,
  selected,
}) => {
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
