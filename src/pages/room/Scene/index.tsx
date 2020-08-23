import React from "react";

import { Assets } from "./Assets";
import { DynamicScene } from "./DynamicScene";
import { Entities } from "./Entities";
import { Environment } from "./Environment";
import styles from "./styles.module.scss";
import { Templates } from "./Templates";
import { VideoArea } from "./VideoArea";

export const Scene: React.FC = () => {
  return (
    <div className={styles.scene}>
      <DynamicScene>
        <Templates />
        <Assets />
        <Environment />
        <VideoArea />
        <Entities />
      </DynamicScene>
    </div>
  );
};
