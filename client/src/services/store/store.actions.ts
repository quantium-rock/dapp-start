/* @/services/store/store.actions.ts */

// import useStore from ".";

import { IUserLoginInput } from "@/global/interfaces/auth.interfaces";
import { SERVER_URL } from "@/config";
import AppSockets from "@/services/sockets/__app__.sockets";
import useStore from ".";

/*** INIT APP STORE ACTIONS ***/

const storeActions = {
  scrollTop(): void {
    window.scrollTo(document.body.scrollHeight, 0);
  },
  async doLogin(credentials: IUserLoginInput) {
    // TODO - remove this
    const store = useStore();

    store.user.uid = "LOGGEDIN";

    return new AppSockets(credentials, SERVER_URL);
  },
  // switchDark(): void {
  //   store.user.ui.dark = !store.user.ui.dark;
  // },
  // switchSound(): void {
  //   store.user.ui.sound = !store.user.ui.sound;
  // },
  // setPrimaryColor(color: string): void {
  //   store.user.ui.colors.primary = color;
  // },
  // setSecondaryColor(color: string): void {
  //   store.user.ui.secondary = color;
  // },
  // setTertiaryColor(color: string): void {
  //   store.user.ui.tertiary = color;
  // },
};

export default storeActions;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
