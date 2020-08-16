import cx from "classnames";
import React, { useContext } from "react";

import { Text } from "@components/typography/Text";

import { RoomContext } from "../../RoomContext";
import { Smiley } from "./Smiley";
import styles from "./styles.module.scss";

export type PeopleIndicatorProps = {
  className?: string;
};

export const PeopleIndicator: React.FC<PeopleIndicatorProps> = ({
  className,
}) => {
  const { otherPeople } = useContext(RoomContext);
  const count = otherPeople.get().length + 1;

  return (
    <div className={cx(styles.peopleIndicator, className)}>
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
    </div>
  );
};
