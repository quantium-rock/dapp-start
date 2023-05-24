/* @/services/sockets/index.ts */

import { SERVER_URL } from "@/config";
import { io, Socket } from "socket.io-client";
// import AppSockets from "./__app__.sockets";
// import useStore from "@/services/store";

/*** SOCKETS WITH STORE INITALIZATION ***/

export function socketConnection(): Socket {
  // const store = useStore();
  const socket: Socket = io(SERVER_URL, {
    transports: ["websocket"],
    autoConnect: true,
  });
  socket.on("serverConnection", (message: string) => {
    console.log(message);
  });

  return socket;
}

const socket: Socket = socketConnection();
export default socket;

// export const sockets = socket.socketInstances(socket._socket, store);

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
