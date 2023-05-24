/* @/services/store/index.ts */

import { defineStore } from "pinia";
import IAppState from "@/global/interfaces/__app__.interfaces";
import { IUserLoginInput } from "@/global/interfaces/auth.interfaces";
import AuthSockets from "@/services/sockets/auth.sockets";
import socket from "@/services/sockets";
import storeState from "./store.state";
import storeActions from "./store.actions";

/*** INIT APP STORE ***/

const useStore = defineStore("store", {
  state: (): IAppState => {
    return {
      ...storeState,
    };
  },
  getters: {
    isLoggedIn: (state: AppState): boolean => {
      return !!state.user.uid;
    },
  },
  actions: {
    ...storeActions,
    ALogin(credentials: IUserLoginInput) {
      return new AuthSockets(credentials, socket);
    },
  },
  persist: {
    storage: window.sessionStorage, // TODO
  },
});

export default useStore;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
