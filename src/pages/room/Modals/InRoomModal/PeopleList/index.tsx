import cx from "classnames";
import React from "react";

import { useRoomContext } from "@connection/RoomContext";

import { Person } from "./Person";
import styles from "./styles.module.scss";

export interface PeopleListProps {
  className?: string;
}

export const PeopleList = ({ className }: PeopleListProps) => {
  const { occupants } = useRoomContext();

  return (
    <ul className={cx(styles.peopleList, className)}>
      {Array.from(occupants.get().values()).map((person, index) => (
        <Person index={index} key={person.id} username={person.username} />
      ))}
    </ul>
  );
};
