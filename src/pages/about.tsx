import Head from "next/head";
import Link from "next/link";

import { Anchor } from "@components/typography/Anchor";
import { Heading } from "@components/typography/Heading";

export default function About() {
  return (
    <main>
      <Head>
        <title>About!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" fontSize="lg">
        about!
      </Heading>
      <Link href="/" passHref>
        <Anchor>Back to home</Anchor>
      </Link>
    </main>
  );
}
