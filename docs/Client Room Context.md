# Client Room Context

Within the [`Room` page](/src/pages/Room/index.tsx), general room data is stored in a `RoomContext` React Context.

## Initializing Room State

Room context state is initialized at the high-level [`RoomContainer` component](/src/pages/room/RoomContainer.tsx).

Each member is stored as a piece of `useState` state.
They're each wrapped with an instanceof the `GetterAndSetter` type, which is a generic TypeScript type that provides `.get()` and `.set()` methods.

> See [`RoomContext.ts`](/src/pages/room/RoomContext.ts) for more details on how the initial context value is created.

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
const { environment } = roomData.get();

environment; // string
```

## Writing Room State

The `.set()` method on those members takes in a new version to pass to a `setState` setter.

```ts
const { roomData } = useRoomContext();

roomData.set({
  ...roomData.get(),
  environment: "new environment",
});
```

> 🔜 Consider reading [Client Socket Messaging](./Client%20Socket%20Messaging.md) next to understand how pages are synchronized.
