# Video Synchronization

> Read [Client Room Context.md](./Client%20Room%20Context.md) before this page to get an understanding of general client<>server communication.

Synchronizing a video between multiple clients and a server is _very hard_.
It's impossible to get exactly right and exceedingly difficult to get right with a margin of error in milliseconds.

- Computers generally have slightly different understandings of what the "current time" is.
- Latency over networks is unreliable but guaranteed to not be instantaneous.
- Execution speed is not guaranteed to be the same across multiple runs of the same code.

## Players vs. Non-Players

We use a "good enough" approach that optimizes for the scenario of one client pressing "play" and other clients in the same room knowing to start their videos.
This is done by designating a client as the "player" for a room if they're the one to press play on a previously paused video.

Once designated the room's player, a client will continuously message a new value for the room data's `currentTime` to the server.
Other, non-player clients will then receive that update and remember it locally.

> The "player" concept is roughly similiar to A-Frame's "ownership" concept, except it's manually implemented to give us more control over timing.

## Time Storage

There are roughly three kinds of "current time" states in play for each room.

- **DOM**: The browser's `<video>` element stores a native `.currentTime` property.
- **React**: A piece of React state so client logic can use a reliable measure of the video's `.currentTime`.
  updated every 500ms or so to be a reading of the DOM's `.currentTime`.
- **Node**: Stored on the server as a member of the
  (which is continuously updated by whoever clicked play most recently)

Amusingly, there is no time in which the video is playing and _all three_ could possibly be the same, as there is variable latency between each step.

Therefore, clients do not update the native DOM `<video>` `.currentTime` property when the video is _playing_; doing so would cause jittery playback.
They instead only update it when _paused_, as a reaction to a server message.

### Player Data Flow

Players read their native `<video>` `.currentTime` and update both their React state and the server's based on it.

1. **DOM** to **React**: Client logic on the player reads from the native DOM's `<video>` on an interval (currently 500ms, but eventually ideally much more rapid) to write a copy of it to React state.
2. **React** to **Node**: Whenever that interval fires, it also emits an update to the server to update the server state.

### Non-Player Data Flow

Non-players receive data in the opposite direction:

1. **Node** to **React**: When the server receives a room data update containing a new `currentTime` from a player, it messages that data out to the rest of the room.
2. **React** to **DOM**: If the video is paused, that new `currentTime` will be applied to it.
