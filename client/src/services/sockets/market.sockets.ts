/* @/services/sockets/market.sockets.ts */

import {
  TSocketIn,
  TSocketClient,
  TSocketServer,
} from "@/global/types/custom/socket.types";
import { IMarketSockets } from "@/global/interfaces/sockets.interfaces";
import IMarketPlace from "@/global/interfaces/market.interfaces";
import CAuthState from "@/global/classes/auth.class";

/* Socket Config */
import { Socket } from "socket.io-client"; // "socket.io" in server !!!
const SOCKET_IN: TSocketIn = "client"; // 'client' | 'server' !!!

/*** AUTHENTICATION SOCKETS ***/

export default class MarketSockets
  extends CAuthState
  implements IMarketSockets
{
  readonly market: IMarketPlace;
  readonly socket: Socket;
  constructor(
    socket: Socket,
    socket_timeout?: number,
    _socket_root: TSocketClient | TSocketServer = "_",
    _socket_in: TSocketIn = SOCKET_IN
  ) {
    super();
    this.market = {} as IMarketPlace;
    this.socket = socket;
  }
}
