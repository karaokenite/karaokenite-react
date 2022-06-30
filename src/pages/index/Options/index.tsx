import React from "react";

import { Cell } from "@components/layout/Cell";
import { Grid } from "@components/layout/Grid";
import { Heading } from "@components/typography/Heading";

import { SectionContent } from "../SectionContent";
import { OptionCell } from "./OptionCell";
import styles from "./styles.module.scss";
import { Text } from "@components/typography/Text";
import { OptionSlant } from "./OptionSlant";

export const Options = () => {
  return (
    <section className={styles.options}>
      <OptionSlant className={styles.slantTop} />
      <div className={styles.optionBackgroundLarge} />
      <SectionContent className={styles.sectionContent}>
        <Heading as="h2" fontSize="xl">
          Karaoke with your friends in VR...
        </Heading>
        <Grid>
          <OptionCell
            className={styles.laptopCell}
            image="/index/laptop.svg"
            text="In the browser"
          />
          <Cell className={styles.or} size={2}>
            <Text as="strong" fontSize="lg">
              or
            </Text>
          </Cell>
          <OptionCell
            className={styles.vrCell}
            image="/index/vr.svg"
            text="With a VR headset"
          />
        </Grid>
      </SectionContent>
      <OptionSlant className={styles.slantBottom} />
    </section>
  );
};
