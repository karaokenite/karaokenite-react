import React from "react";

export const RawHtml = (html: string) => {
  return function GeneratedRawHtml() {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
};
