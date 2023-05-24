/* @/services/store/store.state.ts */

import CAppState from "@/global/classes/__app__.class";
import CUserAuth from "@/global/classes/auth.class";
import CUserProfile from "@/global/classes/user.class";
import CUserWallet from "@/global/classes/wallet.class";
import CMarketPlace from "@/global/classes/market.class";

/*** INIT APP STORE STATE ***/

//new SAppState();
const storeState: CAppState = {
  auth: new CUserAuth(),
  user: new CUserProfile(),
  wallet: new CUserWallet(),
  market: new CMarketPlace(),
};

export default storeState;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
