import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AuthView from "@/components/views/AuthView.vue";
import HomeView from "@/components/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ProfileScreen.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
