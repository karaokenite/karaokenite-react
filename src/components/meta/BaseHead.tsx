import Head from "next/head";
import React from "react";

export interface BaseHeadProps {
  title?: string;
}

export const BaseHead = ({ title }: BaseHeadProps) => {
  return (
    <Head>
      <title>{title ? `${title} ` : ""}Karaoke Nite (Beta)</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content="Karaoke VR with Friends" />
    </Head>
  );
};
