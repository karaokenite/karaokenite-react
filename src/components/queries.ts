/*
Quick wrappers around DOM query methods with (unsafe) generic types for returns.
The document isn't available in server-side rendering but we want these elements
to be easily available in scripts that manipualte them. 
*/

export const getElementById = <ElementType = HTMLElement>(id: string) => {
  return (globalThis.document?.getElementById(id) as unknown) as ElementType;
};

export const querySelector = <ElementType = HTMLElement>(selector: string) => {
  return (globalThis.document?.querySelector(
    selector
  ) as unknown) as ElementType;
};
