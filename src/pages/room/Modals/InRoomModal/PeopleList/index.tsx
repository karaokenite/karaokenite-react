import cx from "classnames";
import React from "react";

import { useRoomContext } from "../../../RoomContext";
import { Person } from "./Person";
import styles from "./styles.module.scss";

export type PeopleListProps = {
  className?: string;
};

export const PeopleList: React.FC<PeopleListProps> = ({ className }) => {
  const { occupants } = useRoomContext();

  return (
    <ul className={cx(styles.peopleList, className)}>
      {Array.from(occupants.get().values()).map((person, index) => (
        <Person index={index} key={person.id} username={person.username} />
      ))}
    </ul>
  );
};
