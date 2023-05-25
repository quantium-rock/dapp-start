/* @/services/sockets/connections/server.socket.ts */

import { Server, Socket } from "socket.io";
import AppSockets from "../__app__.sockets";
// import SERVER from "@/app/main";
const SERVER: any = {};

/*** CONNECT SERVER SOCKET ***/

export let usersConnected = 0;
export let appSockets: AppSockets;

export function serverSocket(io: Server): Socket {
  let socketServer = {} as Socket;
  io.on("connection", (socket: Socket) => {
    socketServer = socket;
    /* Connection */
    usersConnected++;
    socket.emit("nUsers", usersConnected);
    console.log(usersConnected, "users connected.");
    socket.emit("serverConnection", "Client connected to server succesfully");
    /* Disconnection */
    socket.on("disconnect", () => {
      usersConnected--;
      console.log(usersConnected, "users connected.");
      socket.emit("nUsers", usersConnected);
    });
    /* Errors */
    socket.on("error", (err: Error) => {
      console.log("ERROR: Socket error:\n", err);
    });
    /* Debugging */
    socket.on("_clientLogs", (message: string) => {
      console.log("client log", message);
      socket.emit("clientLogs_", message);
    });
    /* Init Sockets Classes */
    appSockets = new AppSockets(socket);
  });
  return socketServer;
}

const SOCKET_SERVER: Socket = serverSocket(SERVER);

export default SOCKET_SERVER;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-22 */
