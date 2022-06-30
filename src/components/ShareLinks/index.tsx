import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export interface ShareLinksProps {
  roomName: string;
  url: string;
}

export const ShareLinks = ({ roomName, url }: ShareLinksProps) => {
  const encodedUrl = encodeURIComponent(url);
  const twitterBody = `Come hang in my karaoke room! The room name is ${roomName}. 🎤🎶`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${twitterBody}\n\n@karaoke_nite`
  )}&url=${encodedUrl}`;

  return (
    <div className={styles.shareLinks}>
      <a
        className={cx(styles.share, styles.twitter)}
        href={twitterHref}
        rel="noreferrer"
        target="_blank"
      >
        Tweet
      </a>
      <a
        className={cx(styles.share, styles.facebook)}
        href={facebookHref}
        onClick={(event) => {
          event.preventDefault();
          window.open(facebookHref, "Facebook Share", "width=600,height=750");
        }}
        target="_new"
      >
        Share
      </a>
    </div>
  );
};
