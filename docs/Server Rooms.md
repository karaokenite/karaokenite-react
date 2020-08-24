# Server Rooms

The server-side portion of the app is set up in [`src/server/index.ts`](/src/server/index.ts).
Although it uses Koa behind the scenes to set up a basic http server, all connection listeners are set up on top of that with Socket.IO.

## Rooms

Rooms are stored by unique string name on the server in an in-memory `RoomsStore`.
These rooms are intentionally directly related to [Socket.IO Rooms](https://socket.io/docs/rooms), which are used to organize socket connections.

Each room also keeps:

- `data: RoomData`: General "jukebox" data for the karaoke experience in that room, such as what song is playing and at what volume.
- `occupants: Map<PersonId, RoomPerson>`: People in the room, keyed by their unique ID assigned to them by Socket.IO.

Rooms are created on-demand when a person first asks to join them via Socket.IO connection.
When the last person (Socket.IO connection) leaves a room, it is destroyed.

## Connections

Connections undergo three major areas of logic:

1. Connecting and Disconnecting
2. Networked Aframe Events
3. Karaoke Nite Events

> 💡 The [Socket.IO Emit Cheatsheet](https://socket.io/docs/emit-cheatsheet) is handy for deciphering socket messages.

### Connecting and Disconnecting

A client will first connect to the the server with the `Aframe.JoinRoom` event, containing the name of the room it would like to be added to.

Upon the socket joining the requested room:

1. A `person` object is created for that person's join time, unique ID, and eventually `username`.
2. That `person` is marked as being within their requested room.
3. A disconnect listener is added to signal to both the Networked Aframe and React sides of Karaoke Nite to delete them.

### Networked Aframe Events

NAF requires a set of known events to arrange its entities.
You can see its [Hosting Guide](https://github.com/networked-aframe/networked-aframe/blob/master/docs/hosting-networked-aframe-on-a-server.md) for more details.

When a new person joins a room, two events are fired:

1. `AframeEvent.ConnectSuccess`: Marking that a person has joined a room.
2. `AframeEvent.OccupantsChanged`: Updating a room's occupants list for a new entry.

Two more events are listened to at runtime:

1. `AframeEvent.Broadcast`: General data sharing event for a networked entity updating itself.
2. `AframeEvent.Send`: I don't know what this does...

### Karaoke Nite Events

We define our own events on top of the required NAF ones.

Clients may send these events to the server:

- `KaraokeEvent.RoomDataUpdated`: General update for some portion of a room's "jukebox" data, such as song index or volume.
- `KaraokeEvent.UsernameSet`: Adds a `username` alias for a person by id.

In response, the server may send these events back to the entire room:

- `KaraokeEvent.OccupantsUpdated`: Provides the full list of all occupants in the room.
- `KaraokeEvent.RoomDataUpdated`: Matching event to send the entire room's jukebox data.

We generally prefer sending events with excess data to the entire room rather than being more selective.
This helps make sure rooms are less likely to fall out of sync from poor network connections.
