/* auths.controller.ts */

import { SecurityFactor, OS } from "../../../global/types";
import { SocialAccounts } from "../../../global/interfaces/user.interfaces";

/* AUTHENTIFICATION PUBLIC STATE */

export interface AuthPublicState {
  __id__: string; // username
  __token__: string; // user's app token (1024 bits)
  _publicVerifications: PublicVerifications;
  _connections: SocialAccounts;
  _controls: AuthControls;
  _timestamps: TimeStamps;
}

interface AuthMultiFactor extends SocialAccounts {
  _factor: SecurityFactor; // IMPORTANT: Check SecurityFactor (in @/types), which by default is 1, and indicates how many connections are required to login (up to 4FAC)
} // SECURITY NOTE: required  accounts required to authenticate (login). If all connections are setted to false (by default), then any connection is allowed.

interface PublicVerifications {
  _verifiedEmails: string[];
  _verifiedPhones: string[];
  _verifiedOAuths: string[]; // oauth user ids from social connections
}

interface AuthControls {
  __id__: string; // auto-generated random and temporary id for user's authentification controls (125 - 255 bits)
  _lang: string; // user keyboard language
  _contactEmail?: string; // optional
  _contactPhone?: string; // optional
  _verified: boolean; // if users has completed phone verification
  _recoveryEmail: string; // user's recovery email
  _recoveryPhone: string; // user's recovery phone
  _authenticated: boolean; // if user is currently online
  _maxSessions: number; // max number of concurred sessions allowed
  _maxDays: number; // max number of days to keep user logged in
  _userInputs: UserInputs; // user's inputs (username, password, etc)
  _advancedSecurity: SecurityControls; // user's security advanced controls
}

interface SecurityControls {
  _securityFactor: SecurityFactor; // 1FAC, 2FAC, 3FAC or 4FAC to login
  // SECURITY NOTE: !!! TODO !!! Make service that verifies that it's never 0 but [1-4], even it's already typed. It must be trigerred everytime user logins.
  _forceConnections: AuthMultiFactor; // force user to connect to these accounts to authenticate
  _blackListIPs: string[]; // network ip addresses. Advanced security setting.
  _blacklistCountries: string[]; // countries. Advanced security setting.
  _blackListDevices: string[]; // machine addresses. Advanced security setting.
  _blackListPlatforms: OS[]; // OS platforms. Advanced security setting.
}

interface UserInputs {
  _username: string;
} // Less inputs, more security

interface TimeStamps {
  _started_at: bigint; // when the current instance started (epoch in milliseconds)
  _started_on: string; // when the current instance started (datetime format)
  _expires_at: bigint; // when the current auth instance (session) expires (epoch in milliseconds)
  _expires_on: string; // when the current auth instance (sessions) expires (datetime format)
}

/* AUTHENTIFICATION PRIVATE STATE *\

!!! SECURITY NOTE: INTERFACES BELOW ARE NEVER SHARED WITH THE CLIENT APP !!!
*/

/* PRIVATE */
export interface AuthPrivateState extends AuthPublicState {
  __recoveryToken__: string; // Private Auth State token (1024 bits) (for recovering & updating passwords)
  _authKeys: AuthSecretKeys; // user authentification keys
}

/* PRIVATE */
interface AuthSecretKeys {
  __ids__: string[]; // user auto-generated id's for each account connection (125 - 255 bits) - USER PRIMARY KEY
  _tokens: string[]; // auto-generated user passwords (255 bits) - NOT USED
  _passwords: string[]; // auto-users passwords (255 bits)
  _emails: string[];
  _phones: string[];
  _pubkeys: string[]; // public keys (wallet addresses)
  _oauthIDs: string[]; // oauth user user tokens
  _oauthsKeys: string[]; // oauth user secret keys
  _web3authID: string[]; // web3auth user id token (1024 bits)
  _web3authAccounts: Web3AuthAccount[]; // user's data from each web3auth connection
  _ipWhitelist: string[]; // network ip addresses
  _ipDevices: string[]; // machine addresses
  _platforms: OS[]; // os platforms. Advanced security setting.
}

/* PRIVATE */
interface Web3AuthAccount {
  __clientid__: string; // web3auth user id token (1024 bits)
  _email: string;
  _phone: string;
  _pubkey: string;
  _pfp: string;
  _provider: string;
  _aggregator: string;
  _type: string;
  _dapp: string;
  _oauth: string;
  _oauth_id: string;
  _last_login: bigint; // epoch in milliseconds
  _created_at: bigint; // epoch in milliseconds
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-07 */
