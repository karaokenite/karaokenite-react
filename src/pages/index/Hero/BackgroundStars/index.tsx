import cx from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export const BackgroundStars = () => {
  return (
    <div aria-hidden className={styles.backgroundStars}>
      <img className={cx(styles.image, styles.mic)} src="/index/mic.png" />
      <img className={cx(styles.image, styles.star1)} src="/index/star1.png" />
      <img className={cx(styles.image, styles.star2)} src="/index/star2.png" />
      <img className={cx(styles.image, styles.star3)} src="/index/star3.png" />
      <img className={cx(styles.image, styles.star4)} src="/index/star4.png" />
      <img className={cx(styles.image, styles.star5)} src="/index/star5.png" />
    </div>
  );
};
