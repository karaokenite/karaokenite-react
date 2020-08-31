# Client Room Context

Code areas for setting up client connections to the server are contained in the [`@connection/` folder](./Folders.md#connection).
They are provided with basic room settings by the Room page, set up [React Contexts](https://reactjs.org/docs/context.html) that provide rudimentary connection APIs, then render the Room page as children underneath those contexts.

Initializing the context consists of three phases, each corresponding to a React component that renders the next step when ready:

1. `DynamicScene`
2. `DynamicSceneHydrating`
3. `DynamicSceneConnected`

### `DynamicScene`

[`DynamicScene`](/src/connection/DynamicScene/index.tsx) receives basic settings directly passed by the page query and calls [`useRoomConnection`](/src/connection/RoomConnection.ts) to:

1. Initialze the NAF connection by setting the `networked-scene` attribute on the root Aframe scene, providing a `globalOnConnectHook` to NAF's `onConnect` pointing to our temporarily created global listener.
2. Upon connection success in that global listener, stores NAF's Socket.IO client in our React state.

That stored socket client is used by the rest of the connection logic to send data to and receive data from the server.

### `DynamicSceneHydrating`

[`DynamicSceneHydrating`](/src/connection/DynamicSceneHydrating/index.tsx) takes in that socket and calls [`useRoomDataConnection`](/src/connection/DynamicScene/DynamicSceneHydrating/useRoomDataConnection.ts) to:

1. Send a `KaraokeEvent.RoomDataHydration` event to the server requesting a summary of room information.
2. Upon receiving the response, store the room information in React state.

That stored room data is used by the rest of the connection and room logic to keep a local copy of the most recent snapshot of the room's state.

### `DynamicSceneConnected`

[`DynamicSceneConnected`](/src/connection/DynamicSceneConnected/index.tsx) receives accumulated client and room data state, and uses them to initialize contexts used by the rest room logic:

- [`EmitContext`](/src/connection/EmitContext.ts) receives a single `emit` function clients may send events to the server through.
- [`RoomContext`](/src/connection/RoomContext.ts) receives [`GetterAndSetter`] wrappers around room data, as well as an [`emitRoomData`] utility to simultaneously update local room data and send any changed values to the server.

It also starts a [`useRoomDataSyncing`](/src/connection/DynamicScene/DynamicSceneConnected/useRoomDataSyncing.ts) effect that continuously synchronizes local state to the server as it changes:

- It immediately emits a `KaraokeEvent.UsernameSet` to indicate the user's selected username to the server.
- When a `KaraokeEvent.OccupantsUpdated` event is received, it updates the local occupancy map.
- When a `KaraokeEvent.RoomDataUpdated` event is received, it updates the local room data.

## Reading Room State

Use `useRoomContext()` to take a dependency on part of the room context in a component.
The `.get()` method on values provided by the room context each return readonly versions of the state.

```ts
const { roomName } = useRoomContext();

roomName.get(); // string
```

The commonly used `roomData` member is a full object, so it's convenient to destructure its `.get()` immediately:

```ts
const { roomData } = useRoomContext();
const { currentTime } = roomData.get();

currentTime; // string
```

## Writing Room State

The `.set()` method on those members takes in a new version to pass to a `setState` setter.

```ts
const { occupants } = useRoomContext();

occupants.set(newOccupancyMap);
```

For `RoomData` specifically, use the returned `emitRoomData` function to simultaneously update local room data and send any changed values to the server.

```ts
const { emitRoomData, roomData } = useRoomContext();

emitRoomData({
  songs: [...roomData.get().songs, newSong],
});
```
