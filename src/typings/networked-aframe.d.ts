declare namespace NAF {
  export interface Schemas {
    add: (schema: any) => void;
  }

  export const schemas: Schemas;

  export const connection: {
    adapter: {
      socket: SocketIOClient.Socket;
    };
  };
}
