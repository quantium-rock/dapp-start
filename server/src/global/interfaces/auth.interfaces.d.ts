/* @/global/interfaces/auth.interfaces.d.ts */

import {
  LoginType,
  OSType,
  DeviceType,
  BrowserType,
  InternetType,
} from "@/global/types/custom/auth.types";

/*** AUTHENTICATION INTERFACES ***/

export default interface IAuthState {
  client?: IAuthPublictState; // client authentification state.
  _server?(): AuthServerState; // () => returns server authentification state.
}

/** AUTHENTICATION USER CREDENTIALS INPUTS **/

export interface IUserLoginInput {
  _uid_: string; // uid user _input_.
  _ukey_: string; // ukey (8-32 digits) password _input_.
}

export interface IUserUnblockInput {
  _uid_: string; // uid user _input_.
  _upin_: string; // upin (4-8 digiits) user _input_.
}

/** AUTHENTICATION PUBLIC STATE **/

export interface IAuthPublicState {
  uid: string; // user's unique id (username, email, phone or token).
  isauth: boolean; // if user is currently authenticated.
  g4alid: G4ALID; // user's G4AL-ID.
  loggin: LogginSession; // user's logging session details from Server.
  socket: SocketSession; // user's socket session details.
  security: AdvancedSecurity; // user's advanced security settings.
}

/** AUTHENTICATION PRIVATE STATE **/

export interface IAuthServerState {
  _uid(): string; // returns user's unique id (username, email, phone or token).
  _ukey$(): string; // returns user's auto-generated (124 bits) and mutable key.
  _upin$(): int; // returns user's pin (4-12 digits pin).
  _isauth(): boolean; // returns if user currently authenticated.
  _g4alid(): G4ALID; // returns user's G4AL-ID.
  _loggin(): LogginSession; // returns user's logging session details.
  _socket(): SocketSession; // returns user's socket session details.
  _security(): AdvancedSecurity; // returns user's advanced security settings.
}

export interface IG4ALID {
  _uid(): string; // user's unqiue id (username, email or token) -> G4AL-ID
  _email(): string; // verified when signup.
  _phone?(): string; // user must verify it to be added.
  _wallets?(): UserWallets; // only if user's activate it.
  _kyc?(): UserKYC; // user's KYC. Only required when legally is needed.
  _tier?(): number; // user's KYC tier. (duplicated)
}

export interface IUserWallets {
  _master(): string; // user's master wallet.
  _imported(): string[]; // user's imported wallets.
}

export interface IUserKYC {
  _id(): string;
  _tier(): number;
  _name(): string;
  _lastName(): string;
  _birthDate(): string;
  _country(): string;
  _address(): string;
  _nid(): string; // national id.
  _passport(): string;
  _selfie(): string;
  _proofOfAddress(): string;
  _proofOfIncome(): string;
  _proofOfFunds(): string;
  _proofOfEmployment(): string;
  _verified_at(): bigint;
  _verified_on(): string;
  _verified_by(): string; // KYC provider.
  _kyc_expires_at(): bigint;
  _kyc_expires_on(): string;
}

export interface IExternalSocials {
  _google?(): string[];
  _apple?(): string[];
  _twitter?(): string[];
  _discord?(): string[];
  _twitch?(): string[];
  _facebook?(): string[];
  _linkedin?(): string[];
  _github?(): string[];
  _reddit?(): string[];
  _line?(): string[];
  _kakao?(): string[];
  _weibo?(): string[];
  _wechat?(): string[];
}

export interface IExternalWallets {
  _torus?(): string[];
  _metamask?(): string[];
  _coinbase?(): string[];
  _walletconnect?(): string[];
  _phantom?(): string[];
}

export interface ILogginSession {
  _authMethod(): LoginType; // user's last login method.
  _ips(): LoginIPs;
  _datetime(): string; // user's tz datetime.
  _timestamp(): bigint; // utc timestamp
}

export interface ILoginIPs {
  _network(): string; // network ip address.
  _country(): string; // country by ip address.
  _city(): string; // city by ip address.
  _device(): string; // device ip.
  _device(): DeviceType; // user's last login device name.
  _os(): OSType; // user's last login device OS.
  _browser(): BrowserType; // user's last login app browser.
  _internet(): InternetType; // user's last login internet connection.
}

export interface ISocketSession {
  _socket_id(): string; // socket unique and temporary connection id.
  _socket_started_at(): bigint; // timestamp when socket connection started.
  _socket_started_on(): string; // utc datetime when socket connection started.
  _socket_expires_at(): bigint; // timestamp when socket connection expires.
  _socket_expires_on(): string; // utc datetime when socket connection expires.
}

export interface IAdvancedSecurity {
  _securityFactor(): number; // 1FAC, 2FAC, 3FAC or 4FAC to login.
  // SECURITY NOTE: !!! TODO !!! Make service that verifies that it's never 0 but [1-4], even it's already typed. It must be trigerred everytime user logins.
  _forceConnections(): string[]; // force user to connect to these accounts to authenticate.
  _maxDays(): number; // max number of days to keep user logged in browser.
  _maxSessions(): number; // max number of concurred sessions allowed.
  _connectionExpires(): number; // number of seconds until the user's socket expires, and reconnects automatically. Not re-login required. Default: 5 minutes.
  _blackListIPs(): string[]; // blacklisted network ip addresses.
  _blackListDevices(): OS[]; // blacklisted machine addresses.
  _blackListPlatforms(): string[]; // blacklisted OS platforms.
  _blacklistCountries(): string[]; // blacklisted countries (ISO 3166-1 alpha-2)
  _timestamp(): bigint; // epoch.
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
