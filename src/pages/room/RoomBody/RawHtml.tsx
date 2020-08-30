import React from "react";

// https://github.com/networked-aframe/networked-aframe/issues/226
// Ugh.
export const RawHtml = (html: string) => {
  return function GeneratedRawHtml() {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
};
