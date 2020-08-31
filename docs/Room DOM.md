# Room DOM

Because Aframe uses direct DOM elements as a source of truth and the Room page uses Aframe for its 3D environment, we must manage direct DOM interactions in our React code.

> We tried [Aframe-React](https://github.com/supermedium/aframe-react) but ran into severe issues ([#5](https://github.com/karaokenite/karaokenite-react/issues/5); [#7](https://github.com/karaokenite/karaokenite-react/issues/7); [networked-aframe#226](https://github.com/networked-aframe/networked-aframe/issues/226)).

## Static HTML

We use a [Next.js custom `Document`](https://nextjs.org/docs/advanced-features/custom-document) to include:

- Static Aframe library scripts:

  - When on the `/room` page, these are executed synchronously in a proper order.
  - When on any other page, they are loaded as `async` as a prefetching technique.

- Raw Aframe elements on the page:

  - Placing then in the raw HTML ensures they already exist on the page by the time our scripts need them.
  - Our Aframe DOM template is stored in a [`template.html`](/src/pages/room/RoomBody/template.html) and loaded via Webpack's [`html-loader`](https://webpack.js.org/loaders/html-loader).

## DOM Interactions

Room DOM interactions are initialized by [`RoomEvents`](/src/pages/room/RoomEvents.ts), a `null`-returning component that sets React effect hooks to initialize DOM event listeners.
Those listeners generally use [`react-use`'s `useEvent`](https://github.com/streamich/react-use/blob/master/docs/useEvent.md) to be automatically disposed when needed.

> See [Client Room Context](./Client%20Room%20Context.md) for how those listeners interact with room state.
