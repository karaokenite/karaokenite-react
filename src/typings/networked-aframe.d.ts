declare namespace NAF {
    export type Schemas = {
        add: (schema: any) => void;
    }

    export const schemas: Schemas

    export const connection: {
        adapter: {
            socket: SocketIOClient.Socket;
        }
    };
}
