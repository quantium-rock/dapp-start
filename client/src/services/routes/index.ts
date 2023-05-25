import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import {
  publicAuthRoute,
  publicForgotPasswordRoute,
  publicLoginRoute,
  publicRegisterRoute,
} from "./auth.routes";
import publicLegalRoute from "./legal.routes";
import {
  publicHomeRoute,
  publicMarketRoute,
  publicMarketDetailRoute,
} from "./market.routes";
import privateProfileRoute from "./profile.routes";

const routes: Array<RouteRecordRaw> = [
  publicHomeRoute,
  publicAuthRoute,
  publicLoginRoute,
  publicRegisterRoute,
  publicForgotPasswordRoute,
  publicMarketRoute,
  publicMarketDetailRoute,
  publicLegalRoute,
  privateProfileRoute,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    next({ name: "auth" });
  }

  next();
});

export default router;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
