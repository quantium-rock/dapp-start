/* @/services/sockets/__app__.sockets.ts */

import { io, Socket } from "socket.io-client";
import { SOCKET_RES_TIMEOUT } from "@/config";
import { IUserLoginInput } from "@/global/interfaces/auth.interfaces";
import ISocketInstances, {
  IMarketSockets,
  IUserSockets,
  IWalletSockets,
} from "@/global/interfaces/sockets.interfaces";
import AuthSockets from "./auth.sockets";

/*** APP SOCKETS ***/

export default class CAppSockets {
  private __credentials: IUserLoginInput;
  private __server_url: string;
  private __socket: Socket;
  private __timeout: number = SOCKET_RES_TIMEOUT; // sockets max seconds response timeout.

  readonly _sockets: ISocketInstances;

  constructor(credentials: IUserLoginInput, server_url: string) {
    this.__credentials = { ...credentials };
    this.__server_url = server_url;
    this.__socket = this.initSocket();
    this._sockets = this.socketInstances(this.__credentials, this.__socket);
  }

  initSocket(): Socket {
    /* Initialize Socket Server */
    const socket = io(this.__server_url, {
      transports: ["websocket", "encrypted"],
      autoConnect: true,
    });

    /* Start Server Connections */
    socket.emit("_helloServer");
    socket.on("helloClient_", (msg: string) => {
      console.log(msg);
    });

    /* Return Socket Connection */
    return socket;
  }

  socketInstances(
    credentials: IUserLoginInput,
    socket: Socket
  ): ISocketInstances {
    return {
      auth: new AuthSockets(credentials, socket),
      user: {} as IUserSockets,
      wallet: {} as IWalletSockets,
      market: {} as IMarketSockets,
    };
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-19 */