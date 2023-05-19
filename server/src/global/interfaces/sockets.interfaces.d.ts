/* @/global/interfaces/sockets.interfaces.d.ts */

import { Socket } from "socket.io-client"; // socket.io in server.
import IAuthState from "./auth.interfaces";
import IUserProfile from "./user.interfaces";
import IUserWallet from "./wallet.interfaces";
import IMarketPlace from "./market.interfaces";

/*** SOCKET INSTANCES INTERFACES ***/

export default interface ISocketInstances {
  auth: IAuthSockets;
  user: IUserSockets;
  wallet: IWalletSockets;
  market: IMarketSockets;
}

export interface IAuthSockets {
  auth: IAuthState;
  socket: Socket;
}

export interface IUserSockets {
  user: IUserProfile;
  socket: Socket;
}

export interface IWalletSockets {
  wallet: IUserWallet;
  socket: Socket;
}

export interface IMarketSockets {
  market: IMarketPlace;
  socket: Socket;
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-16 */
