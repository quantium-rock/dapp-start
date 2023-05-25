/* @/services/sockets/market.sockets.ts */

import {
  TSocketIn,
  TSocket,
  TChannelClient,
  TChannelServer,
} from "@/global/types/custom/socket.types";
import { IMarketSockets } from "@/global/interfaces/sockets.interfaces";
import IMarketPlace from "@/global/interfaces/market.interfaces";
import CMarketPlace from "@/global/classes/market.class";
import { sleepSeconds } from "@/global/utils";
import { SOCKET_IN, SOCKET_TIMEOUT } from "@/config/sockets.config";

/*** USER PROFILE SOCKETS CLASS ***/

export default class MarketSockets
  extends CMarketPlace
  implements IMarketSockets
{
  _market: () => IMarketPlace; // specific store instance.
  readonly _socket: () => TSocket; // socket instance.
  private __socket_timeout: number; // socket timeout in seconds.
  private __socket_root: TChannelServer | TChannelClient; // socket client prefix | socket server suffix
  private __socket_in: TSocketIn; // client | server ?
  private __socket_end: string;
  private __socket_sta: string;
  private __socketChannel = (_name: string) =>
    this.__socket_sta + _name + this.__socket_end;

  constructor(
    socket: TSocket,
    _socket_in: TSocketIn = SOCKET_IN,
    _socket_root: TChannelServer | TChannelClient = "_",
    _socket_timeout: number = SOCKET_TIMEOUT
  ) {
    super();
    this._market = {} as () => IMarketPlace;
    this._socket = () => socket;
    this.__socket_root = _socket_root;
    this.__socket_in = _socket_in;
    this.__socket_end = this.__socket_in === "client" ? this.__socket_root : "";
    this.__socket_sta = this.__socket_in === "client" ? "" : this.__socket_root;
    this.__socket_timeout = _socket_timeout;
  }

  async getMarketPlace(_channel_name = "MarketPlace"): Promise<IMarketPlace> {
    this._socket().emit(this.__socketChannel(_channel_name));
    this._socket().on(
      this.__socketChannel(_channel_name),
      (marketPlace: IMarketPlace) => {
        if (marketPlace) {
          this._market = () => marketPlace;
        }
      }
    );
    /* Await socket answer */
    await sleepSeconds(this.__socket_timeout);
    return this._market();
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
