/* @/services/sockets/auth.sockets.ts */

import { Server, Socket } from "socket.io";
// import { IUserLoginInput } from "@/global/interfaces/auth.interfaces";
import AuthSockets from "./auth.sockets";

export let authSockets: AuthSockets;
export let usersConnected = 0;
export let socketId = "";

const socketConnect = (io: Server): void => {
  io.on("connection", (socket: Socket) => {
    // Connection
    usersConnected++;
    socketId = socket.id;
    socket.emit("nUsers", usersConnected);
    console.log(usersConnected, "users connected.");
    socket.emit("serverConnection", "Connected to server succesfully!");
    // Disconnection
    socket.on("disconnect", () => {
      usersConnected--;
      console.log(usersConnected, "users connected.");
      socket.emit("nUsers", usersConnected);
    });
    // Errors
    socket.on("error", (err: Error) => {
      console.log("ERROR: Socket error:\n", err);
    });
    // Init WebSockets
    // authSockets = new AuthSockets(uli, socket);
  });
  // return authSockets,
};

export default socketConnect;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-23 */
