import React from "react";

export type FontSize = "xs" | "sm" | "md" | "lg" | "xl";

export type PropsFor<Element> = Element extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Element]
  : React.HTMLAttributes<HTMLElement>;

export type BasicTextProps<Element extends string> = PropsFor<Element> & {
  className?: string;
  children: React.ReactNode;
  fontSize?: FontSize;
};

export type TextPropsAs<Element extends string> = BasicTextProps<Element> & {
  as: Element;
};
