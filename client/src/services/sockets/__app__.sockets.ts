/* @/services/sockets/__app__.sockets.ts */

import { io, Socket } from "socket.io-client";
import { SOCKET_RES_TIMEOUT } from "@/config";
import { IUserLoginInput } from "@/global/interfaces/auth.interfaces";
import ISocketInstances, {
  IMarketSockets,
  IUserSockets,
  IWalletSockets,
} from "@/global/interfaces/sockets.interfaces";
import IAppState from "@/global/interfaces/__app__.interfaces";
import AuthSockets from "./auth.sockets";
import useStore from "@/services/store";

/*** APP SOCKETS ***/

export default class CAppSockets {
  private __credentials: IUserLoginInput;
  private __server_url: string;
  private __store: IAppState;
  private __socket: Socket;
  readonly _sockets: ISocketInstances;

  constructor(
    credentials: IUserLoginInput,
    server_url: string,
    store: IAppState,
    _socket_timeout: number = SOCKET_RES_TIMEOUT // sockets max seconds response timeout.
  ) {
    this.__credentials = { ...credentials };
    this.__server_url = server_url;
    this.__store = useStore();
    this.__socket = this.initSocket();
    this._sockets = this.socketInstances(
      this.__credentials,
      this.__socket,
      this.__store
    );
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
    socket: Socket,
    store: IAppState
  ): ISocketInstances {
    return {
      auth: new AuthSockets(credentials, socket, store),
      user: {} as IUserSockets,
      wallet: {} as IWalletSockets,
      market: {} as IMarketSockets,
    };
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-19 */
