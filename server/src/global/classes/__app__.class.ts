/* @/global/classes/__app__.class.ts */

import IAppState from "@/global/interfaces/__app__.interfaces";
import IAuthPublicState from "@/global/interfaces/auth.interfaces";
import IUserProfile from "@/global/interfaces/user.interfaces";
import IUserWallet from "@/global/interfaces/wallet.interfaces";
import IMarketPlace from "@/global/interfaces/market.interfaces";
import CAuthState from "./auth.class";
import CUserProfile from "./user.class";
import CUserWallet from "./wallet.class";
import CMarketPlace from "./market.class";

/*** APP GLOBAL STATE CLASS ***/

export default class CAppState implements IAppState {
  readonly auth: IAuthPublicState;
  readonly user: IUserProfile;
  readonly wallet: IUserWallet;
  readonly market: IMarketPlace;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    this.auth = new CAuthState(args?.[0]);
    this.user = new CUserProfile(args?.[1]);
    this.wallet = new CUserWallet(args?.[2]);
    this.market = new CMarketPlace(args?.[3]);
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
