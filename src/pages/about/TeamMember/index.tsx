import React from "react";

import styles from "./styles.module.scss";
import { Anchor } from "@components/typography/Anchor";

export interface TeamMemberProps {
  handle: string;
  href: string;
  image: string;
}

export const TeamMember = ({ handle, href, image }: TeamMemberProps) => {
  return (
    <div className={styles.teamMember}>
      <img alt="" className={styles.image} src={image} />
      <Anchor className={styles.anchor} fontSize="xs" href={href}>
        @{handle}
      </Anchor>
    </div>
  );
};
