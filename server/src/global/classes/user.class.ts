/* @/global/classes/user.class.ts */

import {
  TUserGender,
  TUserHandees,
  TUserMood,
} from "@/global/types/custom/user.types";
import { TLangCodes } from "@/global/types/custom/lang.types";
import IUserProfile, {
  IUserContact,
} from "@/global/interfaces/user.interfaces";
import IUIConfig from "@/global/interfaces/ui.interfaces";
import {
  IG4ALID,
  IExternalSocials,
  IExternalWallets,
} from "@/global/interfaces/auth.interfaces";

/*** USER PROFILE CLASS ***/

export default class CUserProfile implements IUserProfile {
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
  constructor(
    uid?: string, // user's unique id (username, email, phone or token).
    g4alid?: IG4ALID,
    g4alxp?: number,
    username?: string,
    firstName?: string,
    lastName?: string,
    contact?: IUserContact,
    ext_socials?: IExternalSocials,
    ext_wallets?: IExternalWallets,
    ui?: IUIConfig,
    pfp?: string,
    mood?: TUserMood,
    description?: string,
    url?: string,
    lang?: TLangCodes,
    birth?: string,
    age?: number,
    gender?: TUserGender,
    handees?: TUserHandees,
    nationality?: string,
    country?: string,
    flag?: string,
    city?: string,
    timezone?: string,
    gmt?: number,
    team?: string,
    rank?: number,
    friends?: string[],
    achievements?: string[],
    topics?: string[],
    updated_at?: string,
    updated_on?: bigint,
    created_at?: string,
    created_on?: bigint
  ) {
    this.uid = uid;
    this.g4alid = g4alid;
    this.g4alxp = g4alxp;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.ext_socials = ext_socials;
    this.ext_wallets = ext_wallets;
    this.ui = {} as IUIConfig;
    this.ui.dark = false;
    this.pfp = pfp;
    this.mood = mood;
    this.description = description;
    this.url = url;
    this.lang = lang;
    this.birth = birth;
    this.age = age;
    this.gender = gender;
    this.handees = handees;
    this.nationality = nationality;
    this.country = country;
    this.flag = flag;
    this.city = city;
    this.tz = timezone;
    this.gmt = gmt;
    this.team = team;
    this.rank = rank;
    this.friends = friends;
    this.achievements = achievements;
    this.topics = topics;
    this.updated_at = updated_at;
    this.updated_on = updated_on;
    this.created_at = created_at;
    this.created_on = created_on;
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-16 */
