// IT IS THE UNIQUE INTERFACE THAT DIFFERS WITH THE SERVER

import { SecurityFactor } from "../types";
import { SocialAccounts } from "./user.interfaces";

export interface AuthMultiFactor extends SocialAccounts {
  factor: SecurityFactor; // IMPORTANT: Check SecurityFactor (in @/types), which by default is 1, and indicates how many connections are required to login (up to 4FAC)
} // NOTE: required  accounts required to authenticate (login). If all connections are setted to false (by default), then any connection is allowed.

export interface AuthControls {
  id: string; // auto-generated random and temporary id for user's authentification controls (125 - 255 bits)
  lang: string; // user keyboard language
  securityFactor: SecurityFactor; // !!! TODO: make service that verifies that it's never 0 but [1-4], even it's already typed,
  forceConnections: AuthMultiFactor; // force user to connect to these accounts to authenticate
  contactEmail?: string; // optional
  contactPhone?: string; // optional
  authenticated: boolean;
  verified: boolean;
  userInput: string;
  newUser: boolean;
  instanceTs: bigint; // when the current instance stated (epoch in milliseconds)
  instanceDT: string; // when the current instance stated (datetime format)
}

export interface AuthPublicState {
  id: string; // username
  verifiedEmails: string[];
  verifiedPhones: string[];
  verifiedOAuths: string[]; // oauth user ids from social connections
  controls: AuthControls;
}
