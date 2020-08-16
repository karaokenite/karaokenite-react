import cx from "classnames";
import React from "react";

import { Text } from "@components/typography/Text";

import { useRoomContext } from "../../RoomContext";
import { Smiley } from "./Smiley";
import styles from "./styles.module.scss";

export type PeopleIndicatorProps = {
  className?: string;
  onClick: () => void;
};

export const PeopleIndicator: React.FC<PeopleIndicatorProps> = ({
  className,
}) => {
  const { otherPeople } = useRoomContext();
  const count = otherPeople.get().length + 1;

  return (
    <button className={cx(styles.peopleIndicator, className)}>
      <Text as="span" fontSize="md">
        {count}
      </Text>
      <div className={styles.smileys}>
        {otherPeople
          .get()
          .reverse()
          .map((_, index) => (
            <Smiley key={index} index={index + 1} />
          ))}
        <Smiley index={0} />
      </div>
    </button>
  );
};
