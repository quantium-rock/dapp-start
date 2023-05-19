/* @/global/interfaces/__app__.interfaces.d.ts */

import IAuthState from "./auth.interfaces";
import IUserProfile from "./user.interfaces";
import IUserWallet from "./wallet.interfaces";
import IMarketPlace from "./market.interfaces";

/*** APP INTERFACES ***/

export default interface IAppState {
  auth: IAuthState;
  user: IUserProfile;
  wallet: IUserWallet;
  market: IMarketPlace;
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-16 */
