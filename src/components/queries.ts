export const getElementById = <ElementType = HTMLElement>(id: string) => {
  return (globalThis.document?.getElementById(id) as unknown) as ElementType;
};

export const querySelector = <ElementType = HTMLElement>(selector: string) => {
  return (globalThis.document?.querySelector(
    selector
  ) as unknown) as ElementType;
};
