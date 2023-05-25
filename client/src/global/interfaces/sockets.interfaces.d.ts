/* @/global/interfaces/sockets.interfaces.d.ts */

import { Server, Socket } from "socket.io"; // server.
import { Socket } from "socket.io-client"; // client.
import { TSocket } from "@/global/types/custom/socket.types";
import IUserAuth from "./auth.interfaces";
import IUserProfile from "./user.interfaces";
import IUserWallet from "./wallet.interfaces";
import IMarketPlace from "./market.interfaces";

/*** SOCKET INSTANCES INTERFACES ***/

export type TSocket = Socket | Socket;

export default interface IAppSockets {
  _auth(): IAuthSockets;
  _user(): IUserSockets;
  _wallet(): IWalletSockets;
  _market(): IMarketSockets;
  _socket(): TSocket;
}

export interface IAuthSockets {
  _auth(): IUserAuth;
  _socket(): TSocket;
}

export interface IUserSockets {
  _user(): IUserProfile;
  _socket(): TSocket;
}

export interface IWalletSockets {
  _wallet(): IUserWallet;
  _socket(): TSocket;
}

export interface IMarketSockets {
  _market(): IMarketPlace;
  _socket(): TSocket;
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-16 */
