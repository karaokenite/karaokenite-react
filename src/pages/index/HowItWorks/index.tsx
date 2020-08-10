import React from "react";

import { Heading } from "@components/typography/Heading";

import { SectionContent } from "../SectionContent";
import styles from "./styles.module.scss";
import { WorkingStep } from "./WorkingStep";

export const HowItWorks: React.FC = () => {
  return (
    <section className={styles.howItWorks}>
      <SectionContent>
        <Heading as="h2" className={styles.heading} fontSize="xl">
          How it works:
        </Heading>
        <div className={styles.workingSteps}>
          <WorkingStep
            className={styles.stepRoom}
            heading="Create a Room"
            image="/index/room.svg"
            text="Make your own private karaoke room (but bring your own drinks and snacks!)"
          />
          <WorkingStep
            className={styles.stepFriends}
            heading="Invite Friends"
            image="/index/friends.svg"
            text="Share the room 🔑 with your friends so they can join the party!"
          />
          <WorkingStep
            className={styles.stepGoodTime}
            heading="Have a Good Time"
            image="/index/mic.png"
            text="Choose from a collection of hit songs and sing with your friends in real-time!"
          />
        </div>
      </SectionContent>
    </section>
  );
};
