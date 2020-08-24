import socketio from "socket.io";

import { RoomPerson } from "@shared/types";

import { Logger } from "./logging";
import { ServerRoom } from "./RoomsStore";

export type ServerRegistration = {
  io: socketio.Server;
  log: Logger;
  person: RoomPerson;
  room: ServerRoom;
  socket: socketio.Socket;
};
