/* users.controller */

export interface UIConfig {
  dark: boolean;
  sound: boolean;
  primaryColor: string;
  secondaryColor: string;
  loading: boolean;
  modals: Modals;
}

export interface Modals {
  login: boolean; // app authentification modal
  announcement: boolean;
}
