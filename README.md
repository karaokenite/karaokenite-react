# Karaoke Nite (React)

Experimental Next.js + React + TypeScript version of Karaoke Nite. 🚀

## Local Development

First, install everything once using [yarn](https://yarnpkg.com):

```shell
yarn
```

Now, in two separate terminals, you can start the server with `yarn dev:server` and the site with `yarn dev:server`:

```shell
yarn dev:server
```

```shell
yarn dev:site
```

The site will now be available on http://localhost:3000.

> 🤗 Both client and server are set up to reload automatically when you save source files.

## Architecture

### Documentation

- [Folders](./docs/Folders.md)
- [Server Rooms](./docs/Server%20Rooms.md)
- [Client Room Context](./docs/Client%20Room%20Context.md)
- [Client Socket Messaging](./docs/Client%20Socket%20Messaging.md)

### Tech Stack

These are the major tech things used to create Karaoke Nite:

#### Full Stack

- **[Next.js](https://nextjs.org)**: Stitches together pages written in React with nice development & build tools.
- **[Socket.IO](https://socket.io)**: Real time communication between client and server using WebSockets.
- **[TypeScript](https://typescriptlang.org)**: Language that compiles down to JavaScript, but adds in "type" declarations & type checking.

#### Backend

- **[Koa](https://koajs.com)**: Simple web server; successor to express.js designed by the same team.
- **[Networked Aframe](https://github.com/networked-aframe/networked-aframe)** ("NAF"): Syncs together Aframe entities along with audio streaming.
- **[TS-Node](https://www.npmjs.com/package/ts-node)**: Compiles TypeScript code to JavaScript in real-time to run it as a Node application.

#### Frontend

- **[Aframe](https://aframe.io)**: Set up 3D WebVR spaces using plain HTML and a touch of JavaScript.
- **[CSS Modules](https://github.com/css-modules/css-modules)**: Write your CSS in a (S)CSS file; import its class names in your JS/TS files.
- **[React](https://reactjs.org)**: JavaScript library to create dynamic components that render to the DOM.
- **[React Context](https://reactjs.org/docs/context.html)**: Lets you make objects in a parent available to any of its children without using props.
- **[React Hooks](https://reactjs.org/docs/hooks-overview.html)**: Newer ways to declare stateful or imperative code in React.
- **[SCSS](https://sass-lang.com)**: Imports, variables, and functions in your CSS files. A.k.a. Sass for some reason.
