import React from "react";

import { Footer } from "@components/Footer";
import { Anchor } from "@components/typography/Anchor";
import { Text } from "@components/typography/Text";

import styles from "./styles.module.scss";

export const CreateARoom: React.FC = () => {
  return (
    <section className={styles.createARoom}>
      <div className={styles.sign}>
        <Text as="p" className={styles.text} fontSize="xl">
          Looking for something to do with friends during quarantine?
          <br />
          Have a Karaoke Nite!
        </Text>
        <Anchor
          className={styles.backToTop}
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ behavior: "smooth", top: 0 });
          }}
        >
          Create a Room
        </Anchor>
      </div>
      <Footer />
    </section>
  );
};
