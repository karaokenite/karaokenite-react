# Client Socket Messaging

> 🔙 Read [Client Room Context](./Client%20Room%20Context.md) before this page to understand how local room data is stored.

Client Socket.IO connections are set up in the [`Scene` component](/src/pages/room/Scene/index.tsx), which uses [`useRoomConnection`](/src/pages/room/RoomConnection/index.ts) to hook onto Networked Aframe's Socket.IO connection.

## Socket Connection Initialization

Networked Aframe does our initial Socket.IO / server connection for us.
It also exposes an `onConnect` prop to receive a name of a global function to call when ready.
We provide our `globalOnConnectHook` to call our temporarily created global listener that stores its socket in our own React state.

### Room Connection

That global listener called on connection performs two pieces of state initialization in a `createRoomConnection`:

- It sets the local `client.id` for the room state using the SocketIO connection ID (`personId`).
- It emits an initial `KaraokeEvent.UsernameSet` event to the server to register the client person's username.

It also sets up listeners for server events:

- `KaraokeEvent.OccupantsUpdated`: Sets the full list of occupants in the room from when the server creates, updates, or deletes one.
- `KaraokeEvent.RoomDataUpdated`: Receives a full or partial update of room "jukebox" data from the server.

## Emitting Events

`useRoomConnection` returns an `emit` callback to receive SocketIO events later in the application.
Because the socket state isn't set until NAF's global callback is fired, a `pendingEvents` array is kept in the interim.
Its events are emitted ("flushed") all at once as soon as a connection is established.

### Emit Context

Components inside the scene can generally call to `useEmitContext` to receive that `emit` function via React Context.
This is typically done in conjunction with setting some new state locally as well:

```ts
const emit = useEmitContext();
const { roomData } = useRoomContext();

// ...

roomData.set({ ...roomData.get(), ...newData });
emit(KaraokeEvent.RoomDataUpdated, newData);
```

> 🤔 Eventually, it might be a good idea to create wrappers and/or effects to call `emit` automatically on changes.
