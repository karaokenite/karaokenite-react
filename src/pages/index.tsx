import React from "react";

import { BaseHead } from "@components/meta/BaseHead";

import { Hero } from "./index/Hero";
import { HowItWorks } from "./index/HowItWorks";
import { CreateARoom } from "./index/CreateARoom";
import { Options } from "./index/Options";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.index} id="root">
      <BaseHead />

      <main>
        <Hero />
        <Options />
        <HowItWorks />
        <CreateARoom />
      </main>
    </div>
  );
}
