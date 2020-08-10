import React from "react";

import { Header } from "@components/Header";
import { BaseHead } from "@components/meta/BaseHead";
import { Anchor } from "@components/typography/Anchor";
import { Heading } from "@components/typography/Heading";
import { Text } from "@components/typography/Text";

import styles from "./about.module.scss";
import { TeamMember } from "./about/TeamMember";

const teamMembers = [
  {
    handle: "sonnynomnom",
    href: "sonnynomnom",
    image: "/about/sonnynomnom.png",
  },
  {
    handle: "jackieis_online",
    href: "jackieis_online",
    image: "/about/jackieis_online.jpg",
  },
  {
    handle: "joshuakgoldberg",
    href: "joshuakgoldberg",
    image: "/about/joshuakgoldberg.jpg",
  },
  {
    handle: "irlfede",
    href: "irlfede",
    image: "/about/irlfede.jpg",
  },
  {
    handle: "micaelars",
    image: "/about/micaelars.jpg",
    href: "https://www.behance.net/micaelars",
  },
];

export default function About() {
  return (
    <div>
      <BaseHead title="About" />
      <Header theme="dark" />

      <main className={styles.main}>
        <Heading as="h1" className={styles.heading} fontSize="xl">
          We are Karaoke Nite
        </Heading>
        <Text as="p" className={styles.p} fontSize="xs">
          These are some heavy times for our planet; we were dealt a devastating
          one-two combo from a global pandemic and an unforgettable incident
          that resulted in mourning and unrest around all corners of the world.
        </Text>
        <Text as="p" className={styles.p} fontSize="xs">
          It was during this time when we set out to build something that will
          connect old friends and new, family who are afar, and bring some
          laughter and joy to everyone's homes.
        </Text>
        <Text as="p" className={styles.p} fontSize="xs">
          Welcome to Karaoke Nite and we hope you enjoy using it as much as we
          did building it.
        </Text>

        <Heading as="h2" className={styles.heading} fontSize="xl">
          The Team
        </Heading>
        <div className={styles.teamMembers}>
          {teamMembers.map((teamMember) => (
            <TeamMember key={teamMember.handle} {...teamMember} />
          ))}
        </div>

        <Heading as="h2" className={styles.heading} fontSize="xl">
          Beta v0.1
        </Heading>
        <Text as="p" className={styles.p} fontSize="xs">
          This is currently a Beta version of the app. We have a ton of features
          and goodies coming soon so stay tuned. In the meantime, please help us
          make this better by answering this short{" "}
          <Anchor
            fontSize="xs"
            href="https://karaokenite.typeform.com/to/SaHxnvyT"
          >
            Typeform survey
          </Anchor>
          !
        </Text>
        <Text as="p" className={styles.p} fontSize="xs">
          Karaoke Nite is also open source. If you are a programmer, designer,
          3d modeller, or game artist, you can find the project on our{" "}
          <Anchor fontSize="xs" href="https://www.patreon.com/karaokenite">
            GitHub
          </Anchor>
          .
        </Text>
        <Text as="p" className={styles.p} fontSize="xs">
          You can also support us on our{" "}
          <Anchor fontSize="xs" href="https://github.com/karaokenite">
            Patreon
          </Anchor>
          !
        </Text>

        <Heading as="h2" className={styles.heading} fontSize="xl">
          Record Labels &amp; Artists
        </Heading>
        <Text as="p" className={styles.p} fontSize="xs">
          If you are a independent record label or band/artist that's interested
          in having your music videos or lyric videos be featured in the app,
          please let us know via{" "}
          <Anchor fontSize="xs" href="mailto:sonnynomnom@gmail.com">
            email
          </Anchor>
          !
        </Text>

        <Heading as="h2" className={styles.heading} fontSize="xl">
          Legal
        </Heading>
        <Text as="p" className={styles.p} fontSize="xs">
          The Beta was soft launched on 8/8/2020 with 20 karaoke soundtracks
          featured in the app. All soundtracks have been lawfully purchased
          (proof of purchase can be requested). If people enjoy the app and want
          to see it continue to grow, we will work with a copyright lawyer to
          purchase licenses and add more songs to our collection.
        </Text>
      </main>
    </div>
  );
}
