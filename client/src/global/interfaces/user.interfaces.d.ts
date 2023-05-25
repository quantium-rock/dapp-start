/* @/global/interfaces/user.interfaces.d.ts */

import {
  TUserGender,
  TUserHandees,
  TUserMood,
  TLangCodes,
} from "@/global/types/custom/user.types";
import { IG4ALID } from "./auth.interfaces";
import { IUIConfig } from "./ui.interfaces";

/*** USER INTERFACES ***/

export default interface IUserProfile {
  uid?: string; // user's unique id (username, email, phone or token).
  g4alid?: IG4ALID; // user's G4AL ID.
  g4alxp?: number; // user's G4AL XP.
  username?: string; // unique player username.
  firstName?: string;
  lastName?: string;
  contact?: IUserContact; // user's optional contact info.
  imp_wallets?: IExternalWallets; // user's imported wallets (custodial).
  ext_wallets?: IExternalWallets; // user's external wallets (non-custodial).
  ext_socials?: IExternalSocials; // user's external socials (oauth).
  ui?: IUIConfig; // user's ui settings.
  pfp?: string; // profile pic url.
  mood?: TUserMood; // current user feelings.
  description?: string;
  url?: string; // personal website.
  lang?: TLangCodes; // language.
  birth?: string; // birth date.
  age?: number;
  gender?: TUserGender;
  handees?: TUserHandees;
  nationality?: string;
  country?: string;
  flag?: string;
  city?: string;
  tz?: string; // timezone.
  gmt?: number;
  team?: string;
  rank?: number;
  friends?: string[];
  achievements?: string[];
  topics?: string[];
  updated_at?: string; // user's tz datetime.
  updated_on?: bigint; // unix timestamp.
  created_at?: string; // user's tz datetime.
  created_on?: bigint; // unix timestamp.
}

interface IUserContact {
  email?: boolean; // for marketing purposes (optional).
  phone?: boolean; // for marketing purposes (optional).
  other?: string; // for marketing purposes (optional).
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
