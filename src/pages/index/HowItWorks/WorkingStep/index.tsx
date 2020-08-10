import cx from "classnames";
import React from "react";

import { Cell } from "@components/layout/Cell";
import { Grid } from "@components/layout/Grid";
import { Heading } from "@components/typography/Heading";
import { Text } from "@components/typography/Text";

import styles from "./styles.module.scss";

export type WorkingStepProps = {
  className?: string;
  heading: string;
  image: string;
  text: string;
};

export const WorkingStep: React.FC<WorkingStepProps> = ({
  className,
  heading,
  image,
  text,
}) => {
  return (
    <Grid className={cx(styles.workingStep, className)}>
      <Cell size={3}>
        <img alt="" className={styles.image} src={image} />
      </Cell>
      <Cell className={styles.textCell} size={3}>
        <Heading as="h3" className={styles.heading} fontSize="md">
          {heading}
        </Heading>
        <Text as="div" className={styles.text} fontSize="sm">
          {text}
        </Text>
      </Cell>
    </Grid>
  );
};
