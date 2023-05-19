import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import publicAuthRoute from "./auth.routes";
import publicMarketRoute from "./market.routes";
import publicLegalRoute from "./legal.routes";
import privateProfileRoute from "./profile.routes";

const routes: Array<RouteRecordRaw> = [
  publicAuthRoute,
  publicMarketRoute,
  publicLegalRoute,
  privateProfileRoute,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-16 */
