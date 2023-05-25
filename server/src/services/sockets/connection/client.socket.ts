/* @/services/sockets/connections/client.socket.ts */

import { Socket, io } from "socket.io-client"; // socket.io-client | socket.io
import { SERVER_URL } from "@/config"; // CLIENT | SERVER

/*** CONNECT CLIENT SOCKET ***/

export function clientSocket(server_url: string): Socket {
  const socket: Socket = io(server_url, {
    transports: ["websocket"],
    autoConnect: true,
  });
  socket.on("serverConnection", (message: string) => {
    console.log(message);
  });

  return socket;
}

const SOCKET_CLIENT: Socket = clientSocket(SERVER_URL);

export default SOCKET_CLIENT;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-22 */
