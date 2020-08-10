import React from "react";

import styles from "./styles.module.scss";
import { Anchor } from "@components/typography/Anchor";

export type TeamMemberProps = {
  handle: string;
  href: string;
  image: string;
};

export const TeamMember: React.FC<TeamMemberProps> = ({
  handle,
  href,
  image,
}) => {
  return (
    <div className={styles.teamMember}>
      <img alt="" className={styles.image} src={image} />
      <Anchor className={styles.anchor} fontSize="xs" href={href}>
        @{handle}
      </Anchor>
    </div>
  );
};
