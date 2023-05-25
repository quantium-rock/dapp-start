/* @/services/sockets/__app__.sockets.ts */

import { Socket } from "socket.io";
import IAppSockets from "@/global/interfaces/sockets.interfaces";
import CAppState from "@/global/classes/__app__.class";
import AuthSockets from "./auth.sockets";
import UserSockets from "./user.sockets";
import WalletSockets from "./wallet.sockets";
import MarketSockets from "./market.sockets";
import { SERVER_URL, CLIENT_URL } from "@/config";

/*** APP SOCKETS CLASS ***/

export default class AppSockets extends CAppState implements IAppSockets {
  private __server_url: () => string;
  private __client_url: () => string;
  readonly _socket: () => Socket;
  readonly _auth: () => AuthSockets;
  readonly _user: () => UserSockets;
  readonly _wallet: () => WalletSockets;
  readonly _market: () => MarketSockets;
  constructor(
    socket: Socket,
    _server_url: string = SERVER_URL,
    _client_url: string = CLIENT_URL
  ) {
    super();
    this.__server_url = () => _server_url;
    this.__client_url = () => _client_url;
    this._socket = () => socket;
    this._auth = () => new AuthSockets(socket);
    this._user = () => new UserSockets(socket);
    this._wallet = () => new WalletSockets(socket);
    this._market = () => new MarketSockets(socket);
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-19 */
