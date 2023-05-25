/* @/services/sockets/index.ts */

import { TSocket } from "@/global/interfaces/sockets.interfaces";
import IAppSockets from "@/global/interfaces/sockets.interfaces";
import AuthSockets from "./auth.sockets";
import UserSockets from "./user.sockets";
import WalletSockets from "./wallet.sockets";
import MarketSockets from "./market.sockets";
import SOCKET from "./connection";

const appSockets: IAppSockets = {
  _socket: () => SOCKET,
  _auth: () => new AuthSockets(SOCKET),
  _user: () => new UserSockets(SOCKET),
  _wallet: () => new WalletSockets(SOCKET as TSocket),
  _market: () => new MarketSockets(SOCKET),
};

export default appSockets;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
