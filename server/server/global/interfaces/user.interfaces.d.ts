/* users.controller */

import { UserGender, UserHandees, Mood, LangCodes } from "../types";

export interface UserProfile {
  player: string; // username
  firstName: string;
  lastName: string;
  verified: boolean;
  kycID: string;
  contact: UserContact;
  accounts: UserAccounts;
  pfp: string; // profile pic url
  mood: Mood; // current user feelings
  description: string;
  url: string; // personal website
  lang: LangCodes; // language
  age: number;
  gender: UserGender;
  handees: UserHandees;
  nationality: string;
  country: string;
  flag: string;
  city: string;
  timezone: string;
  gmt: number;
  g4alXP: number;
  team: string;
  rank: number;
  friends: string[];
  achievements: string[];
  topics: string[];
  updatedOn: string;
  createdOn: string;
}

export interface UserContact {
  email?: string;
  phone?: string;
}

export interface UserAccounts {
  web2: Web2Accounts;
  web3: Web3Accounts;
}

export interface Web3Accounts {
  torus: boolean;
  metamask: boolean;
  coinbase: boolean;
  walletconnect: boolean;
  phantom: boolean;
}

export interface Web2Accounts {
  email: boolean;
  phone: boolean;
  social: SocialAccounts;
}

export interface SocialAccounts {
  google: boolean;
  apple: boolean;
  twitter: boolean;
  discord: boolean;
  twitch: boolean;
  facebook: boolean;
  linkedin: boolean;
  github: boolean;
  reddit: boolean;
  line: boolean;
  kakao: boolean;
  weibo: boolean;
  wechat: boolean;
}
