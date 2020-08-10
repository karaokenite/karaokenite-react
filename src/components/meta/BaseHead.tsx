import Head from "next/head";
import React from "react";

export type BaseHeadProps = {
  title?: string;
};

export const BaseHead: React.FC<BaseHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title ? `${title} | ` : ""}Karaoke Nite (Beta)</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content="Karaoke VR with Friends" />
    </Head>
  );
};
