// https://github.com/microsoft/TypeScript/issues/4648
// ...but with all sorts of elements allowed. 😬

declare namespace JSX {
  interface IntrinsicElements {
    "a-assets": any;
    "a-entity": any;
    "a-image": any;
    "a-plane": any;
    "a-video": any;
  }
}
