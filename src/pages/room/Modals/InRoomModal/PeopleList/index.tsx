import cx from "classnames";
import React from "react";

import { useRoomContext } from "../../../RoomContext";
import { Person } from "./Person";
import styles from "./styles.module.scss";

export type PeopleListProps = {
  className?: string;
};

export const PeopleList: React.FC<PeopleListProps> = ({ className }) => {
  const { host, otherPeople } = useRoomContext();

  return (
    <ul className={cx(styles.peopleList, className)}>
      <Person host={host.get()} index={0} username="you" />
      {otherPeople.get().map((person, index) => (
        <Person
          host={person.host}
          index={index}
          key={person.username}
          username={person.username}
        />
      ))}
    </ul>
  );
};
