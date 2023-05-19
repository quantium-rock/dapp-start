/* Temp Routes */

const privateProfileRoute = {
  path: "/",
  name: "profile",
  // route level code-splitting
  // this generates a separate chunk (profile.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "profile" */ "@/views/ProfileView.vue"),
};

export default privateProfileRoute;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-16 */
