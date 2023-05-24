/* @/global/classes/auth.class.ts */

import IAuthState, {
  IAuthPublicState,
  IAuthServerState,
  IG4ALID,
  ILogginSession,
  ISocketSession,
  IAdvancedSecurity,
} from "@/global/interfaces/auth.interfaces";

/*** AUTHENTICATION STATE CLASS DECLARATION ***/

export default class CAuthState implements IAuthState {
  readonly client?: IAuthPublicState; // () => returns client authentification state.
  _server?: () => IAuthServerState; // returns server authentification state.

  constructor(client?: IAuthPublicState, server?: IAuthServerState) {
    const serverState = new CAuthServerState(server as IAuthServerState);
    this.client = client as IAuthPublicState;
    this._server = () => serverState as IAuthServerState;
  }
}

/** AUTHENTICATION SERVER STATE CLASS **/

class CAuthServerState implements IAuthServerState {
  _uid: () => string; // returns user's unique id (username, email or token).
  _ukey$: () => string; // returns user's auto-generated-murable (124 bits) key.
  _upin$: () => number; // returns user's pin (4-12 digits pin).
  _isauth: () => boolean; // returns user is currently authenticated.
  _g4alid: () => IG4ALID; // returns user's G4AL-ID.
  _loggin: () => ILogginSession; // returns user's logging session details.
  _socket: () => ISocketSession; // returns user's socket session details.
  _security: () => IAdvancedSecurity; // returns user's advanced security settings.

  constructor(server: IAuthServerState) {
    this._uid = (arg = server._uid()) => arg;
    this._ukey$ = (arg = server._ukey$()) => arg;
    this._upin$ = (arg = server._upin$()) => arg;
    this._isauth = (arg = server._isauth()) => arg;
    this._g4alid = (arg = server._g4alid()) => arg;
    this._loggin = (arg = server._loggin()) => arg;
    this._socket = (arg = server._socket()) => arg;
    this._security = (arg = server._security()) => arg;
  }

  getIsAuth = (): boolean => {
    return this._isauth();
  };

  getG4ALID = (): IG4ALID => {
    return this._g4alid();
  };

  getLoggin = (): ILogginSession => {
    return this._loggin();
  };

  getSocket = (): ISocketSession => {
    return this._socket();
  };

  getSecurity = (): IAdvancedSecurity => {
    return this._security();
  };
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
