/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    any
  >;
  export default component;
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
