import MarketView from "@/views/MarketView.vue";
import MarketDetailView from "@/views/MarketDetailView.vue";
import HomeView from "@/views/HomeView.vue";

export const publicHomeRoute = {
  path: "/",
  name: "home",
  component: HomeView,
};

export const publicMarketRoute = {
  path: "/marketplace/:game",
  name: "marketplace-game",
  component: MarketView,
};

export const publicMarketDetailRoute = {
  path: "/marketplace/:game/:id",
  name: "marketplace-game-detail",
  component: MarketDetailView,
};

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
