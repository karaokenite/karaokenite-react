import React from "react";

export type RawProps = {
  html: string;
};

// https://github.com/networked-aframe/networked-aframe/issues/226
// Ugh.
export const Raw: React.FC<RawProps> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
