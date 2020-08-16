import React from "react";

import { Header } from "@components/Header";
import { TopRight } from "@components/Header/TopRight";
import { Cell } from "@components/layout/Cell";
import { Grid } from "@components/layout/Grid";
import { Text } from "@components/typography/Text";

import { SectionContent } from "../SectionContent";
import { BackgroundStars } from "./BackgroundStars";
import { CreateRoom } from "./CreateRoom";
import styles from "./styles.module.scss";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="top">
      <BackgroundStars />
      <Header>
        <TopRight theme="light" />
      </Header>
      <SectionContent className={styles.sectionContent}>
        <Grid>
          <Cell size={3}>
            <img
              alt="Karaoke Nite logo"
              className={styles.logo}
              src="/logo.svg"
            />
            <Text as="div" className={styles.description} fontSize="sm">
              Sing with your friends in VR!
            </Text>
          </Cell>

          <Cell size={3}>
            <CreateRoom className={styles.createRoom} />
          </Cell>
        </Grid>
      </SectionContent>
    </section>
  );
};
