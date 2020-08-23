export enum RoomEvent {
    // Native NAF events
    Broadcast = "broadcast",
    Connection = "connection",
    ConnectSuccess = "connectSuccess",
    Disconnect = "disconnect",
    JoinRoom = "joinRoom",

    /**
     * Native NAF occupants should be updated.
     */
    OccupantsChanged = "occupantsChanged",

    Send = "send",

    // Custom additions

    /**
     * The context value for occupants has changed, such as for a rename or leave.
     */
    OccupantsUpdated = "occupantsUpdated",
    UsernameSet = "usernameSet",
}