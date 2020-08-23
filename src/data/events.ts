import { JukeboxUpdatedData, OccupantsUpdatedData, SetUsernameData } from "./types";

/**
 * Socket events used by Networked Aframe ("NAF").
 */
export enum AframeEvent {
    /**
     * Generic data sharing event for a person updating themselves.
     */
    Broadcast = "broadcast",

    /**
     * A new person's JoinRoom event was successful.
     */
    ConnectSuccess = "connectSuccess",

    /**
     * An existing person is leaving a room.
     */
    Disconnect = "disconnect",

    /**
     * A new person has joined a room.
     */
    JoinRoom = "joinRoom",

    /**
     * Native NAF occupants should be updated.
     */
    OccupantsChanged = "occupantsChanged",

    /**
     * ...what does this actually do?
     */
    Send = "send",
}

/**
 * Socket events unique to this application.
 */
export enum KaraokeEvent {
    /**
     * Someone pressed the pause/play button.
     */
    JukeboxUpdated = "playing",

    /**
     * The context value for occupants has changed, such as for a rename or leave.
     */
    OccupantsUpdated = "occupantsUpdated",

    /**
     * A person has set their username.
     */
    UsernameSet = "usernameSet",
}
