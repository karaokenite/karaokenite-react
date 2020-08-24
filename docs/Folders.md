# Folders

Application code for Karaoke Nite lives entirely within a few folders inside the `src/` directory:

- `components`
- `pages`
- `shared`
- `server`
- `typings`

## `components`

Standalone React components not directly tied to any part of the site.
These form a sort of fledgling component library that fills out our basic buttons, logos, typography, and the like.

- 👍 **Do** split out the "common" parts of designs into reusable components here.
- 👍 **Do** prefer using the `forms/` components for form inputs, `layout/` components for grid layouts, and `typography/` components for headings, links, paragraphs, and other forms of body text.
- 👎 **Don't** place components here that rely on any sort of complex cross-component logic, such as server connection contexts.

> 💡 Sticking to our fledgling design system makes it easier to keep pieces of the UI looking consistent and reduces work recreating similar components.

## `pages`

[Next.js Pages](https://nextjs.org/docs/basic-features/pages) are stored here.
These are the root entry points launched by Next.js when you `yarn dev:site`.

- 👍 **Do** place non-`index` pages in their own folders.
- 👎 **Don't** import between pages (use `components` or `shared` for that).

## `shared`

Code available on both the client and server.
This is mostly shared definitions around Socket.IO events or room defaults.

- 👍 **Do** place shared code here instead of duplicating in other directories.
- 👎 **Don't** take on large, client-specific, or server-specific dependencies in this folder.

## `server`

Node application that sets up Socket.IO connections.
Uses a quick little `logging.ts` logger setup to print out nice color-coded logs for major events.

For now, a `glitch-backup.js` file is kept as reference of working Networked Aframe sample hosting code; it can be run directly with `node` as a drop-in replacement for testing (though it doesn't support Karaoke Nite events).

## `typings`

Global `.d.ts` "definition" files for TypeScript to inform the type system of any types not available as [type declaration packages](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).
