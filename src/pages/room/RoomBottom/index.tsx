import cx from "classnames";
import React from "react";

import { Button } from "@components/Button";

import feedback from "./assets/feedback.svg";
import { ControlsNotice } from "./ControlsNotice";
import styles from "./styles.module.scss";

export const RoomBottom: React.FC = () => {
  return (
    <div className={styles.roomBottom}>
      <ControlsNotice className={styles.controls} />
      <div className={styles.buttons}>
        <Button
          aria-label="Provide feedback"
          className={cx(styles.button, styles.feedbackButton)}
          variant="yellow"
        >
          <img alt="" className={styles.feedbackImage} src={feedback} />
        </Button>
        <Button className={cx(styles.button, styles.vrButton)} variant="white">
          VR?
        </Button>
      </div>
    </div>
  );
};
