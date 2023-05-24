import AuthView from "@/views/AuthView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";

export const publicAuthRoute = {
  path: "/auth",
  name: "auth",
  component: AuthView,
  meta: {
    isAuthRoute: true,
  },
};

export const publicLoginRoute = {
  path: "/login",
  name: "login",
  component: LoginView,
  meta: {
    isAuthRoute: true,
  },
};

export const publicRegisterRoute = {
  path: "/signup",
  name: "register",
  component: RegisterView,
  meta: {
    isAuthRoute: true,
  },
};

export const publicForgotPasswordRoute = {
  path: "/forgot-password",
  name: "forgot-password",
  component: ForgotPasswordView,
  meta: {
    isAuthRoute: true,
  },
};

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
