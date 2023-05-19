/* @/services/store/index.ts */

import { defineStore } from "pinia";
import AppState from "@/global/interfaces/__app__.interfaces";
import storeState from "./store.state";
import storeActions from "./store.actions";

/*** INIT APP STORE ***/

const useStore = defineStore("store", {
  state: (): AppState => {
    return {
      ...storeState,
    };
  },
  actions: { ...storeActions },
});

export default useStore;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
