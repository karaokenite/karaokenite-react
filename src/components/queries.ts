export const getElementById = <ElementType = HTMLElement>(id: string) => {
  return (globalThis.document?.getElementById(id) as unknown) as ElementType;
};
