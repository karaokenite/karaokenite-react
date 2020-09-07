/**
 * Socket events used by Networked Aframe ("NAF").
 */
export enum AframeEvent {
  /**
   * General data sharing event for a person updating themselves.
   */
  Broadcast = "broadcast",

  /**
   * A new person's JoinRoom event was successful.
   */
  ConnectSuccess = "connectSuccess",

  /**
   * A new person has joined a room.
   */
  JoinRoom = "joinRoom",

  /**
   * Native NAF occupants should be updated.
   */
  OccupantsChanged = "occupantsChanged",

  /**
   * Updates a specific client on connection details of another client.
   */
  Send = "send",
}

/**
 * Socket events unique to this application.
 */
export enum KaraokeEvent {
  /**
   * The context value for occupants has changed, such as for a rename or leave.
   */
  OccupantsUpdated = "occupantsUpdated",

  /**
   * A new client is requesting a summary of room data.
   */
  RoomDataHydration = "RoomDataHydration",

  /**
   * Some portion of room data has been updated.
   */
  RoomDataUpdated = "roomDataUpdated",

  /**
   * A person has set their username.
   */
  UsernameSet = "usernameSet",
}
