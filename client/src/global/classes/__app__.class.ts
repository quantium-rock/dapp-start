/* @/global/classes/__app__.class.ts */

import IAppState from "@/global/interfaces/__app__.interfaces";
import IUserAuth from "@/global/interfaces/auth.interfaces";
import IUserProfile from "@/global/interfaces/user.interfaces";
import IUserWallet from "@/global/interfaces/wallet.interfaces";
import IMarketPlace from "@/global/interfaces/market.interfaces";
import CAuthState from "./auth.class";
import CUserProfile from "./user.class";
import CUserWallet from "./wallet.class";
import CMarketPlace from "./market.class";

/*** APP GLOBAL STATE CLASS ***/

export default class CAppState implements IAppState {
  readonly auth: IUserAuth;
  readonly user: IUserProfile;
  readonly wallet: IUserWallet;
  readonly market: IMarketPlace;
  constructor() {
    this.auth = new CAuthState();
    this.user = new CUserProfile();
    this.wallet = new CUserWallet();
    this.market = new CMarketPlace();
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
