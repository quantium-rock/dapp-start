/* @/global/interfaces/ui.interfaces.d.ts */

/*** UI INTERFACES ***/

export default interface IUIConfig {
  dark: boolean; // dark or light mode.
  sound: boolean; // sound effects.
  music: boolean; // background music.
  notifications: boolean; // notifications.
  colors: IColors; // users 3 favorite colors.
  theme: string; // user favorite theme.
  loading: boolean; // has UI to be loading?
  rerender: boolean; // has UI to be rendered?
  modals: IModals; // active modals.
}

export interface IColors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface IModals {
  signup: boolean;
  login: boolean;
  announcement: boolean;
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
