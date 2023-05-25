/* @/services/store/index.ts */

import { defineStore } from "pinia";
import IAppState from "@/global/interfaces/__app__.interfaces";
import CUserAuth from "@/global/classes/auth.class";
import CUserProfile from "@/global/classes/user.class";
import CUserWallet from "@/global/classes/wallet.class";
import CMarketPlace from "@/global/classes/market.class";
import AuthSockets from "@/services/sockets/auth.sockets";
import UserSockets from "@/services/sockets/user.sockets";
import WalletSockets from "@/services/sockets/wallet.sockets";
import MarketSockets from "@/services/sockets/market.sockets";
import appSockets from "@/services/sockets";
import { TSocket } from "@/global/interfaces/sockets.interfaces";

/*** INIT APP STORE ***/

const useStore = defineStore("store", {
  state: (): IAppState => {
    return {
      auth: new CUserAuth(),
      user: new CUserProfile(),
      wallet: new CUserWallet(),
      market: new CMarketPlace(), // Marketplace light.
    };
  },
  actions: {
    authSoc: new AuthSockets(appSockets._socket() as TSocket),
    userSoc: new UserSockets(appSockets._socket() as TSocket),
    walletSoc: new WalletSockets(appSockets._socket() as TSocket),
    marketSoc: new MarketSockets(appSockets._socket() as TSocket),
  },
});

export default useStore;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-25 */
