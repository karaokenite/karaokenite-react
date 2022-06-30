import cx from "classnames";
import React from "react";

import { Button } from "@components/Button";

import feedback from "./assets/feedback.svg";
import { ControlsNotice } from "./ControlsNotice";
import styles from "./styles.module.scss";
import { SetRoomModal } from "../Modals/types";

export interface RoomBottomProps {
  setModal: SetRoomModal;
}

export const RoomBottom = ({ setModal }: RoomBottomProps) => {
  return (
    <div className={styles.roomBottom}>
      <ControlsNotice className={styles.controls} />
      <div className={styles.buttons}>
        <Button
          aria-label="Provide feedback"
          className={cx(styles.button, styles.feedbackButton)}
          onClick={() => setModal("feedback")}
          variant="yellow"
        >
          <img alt="" className={styles.feedbackImage} src={feedback} />
        </Button>
      </div>
    </div>
  );
};
