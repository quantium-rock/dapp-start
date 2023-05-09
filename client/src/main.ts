import "./global/web/registerServiceWorker";
import "./assets/css/tailwind.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Notifications from "@kyvg/vue3-notification";
import velocity from "velocity-animate";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia).use(router).use(Notifications, { velocity }).mount("#app");
