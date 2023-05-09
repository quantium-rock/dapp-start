/* eslint-disable */
declare module "@web3auth/wallet-connect-v2-adapter";
declare module "@kyvg/vue3-notification";
declare module "vue3-carousel";
declare module "vue-carousel-3d" {
  import { DefineComponent } from "vue";
  export const Carousel3d: DefineComponent<any, any, any>;
  export const Slide: DefineComponent<any, any, any>;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.wav" {
  const value: any;
  export default value;
}

declare module "*.mp3" {
  const value: any;
  export default value;
}

declare module "*.mp4" {
  const value: any;
  export default value;
}
