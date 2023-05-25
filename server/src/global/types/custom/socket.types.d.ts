/* @/global/types/custom/socket.types.d.ts */

import * as socketClient from "socket.io-client";
import * as socketServer from "socket.io";

/*** SOCKET INSTANCES TYPES ***/

export type TSocketIn = "client" | "server";
export type TSocket = socketClient.Socket | socketServer.Socket;
export type TSocketClient = socketClient.Socket;
export type TSocketServer = socketServer.Socket;
export type TChannelClient = "_"; // starts with '_';
export type TChannelServer = "_"; // ends with '_';

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-14 */
