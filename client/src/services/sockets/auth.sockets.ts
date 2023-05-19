/* @/services/sockets/auth.sockets.ts */

import {
  TSocketIn,
  TSocketClient,
  TSocketServer,
} from "@/global/types/custom/socket.types";
import { IAuthSockets } from "@/global/interfaces/sockets.interfaces";
import IAuthState, {
  IAuthServerState,
  IG4ALID,
  IUserLoginInput,
} from "@/global/interfaces/auth.interfaces";
import { waitSeconds } from "@/global/utils";
import IAppState from "@/global/interfaces/__app__.interfaces";
import CAuthState from "@/global/classes/auth.class";

/*** AUTHENTICATION SOCKETS ***/

import { Socket } from "socket.io-client"; // "socket.io" in server !!!
const SOCKET_IN: TSocketIn = "client"; // 'client' | 'server' !!!

export default class AuthSockets extends CAuthState implements IAuthSockets {
  readonly auth: IAuthState; // specific store instance.
  readonly socket: Socket; // socket instance.
  private __server: IAuthServerState; // server authentification private state.
  private __server_auth: Promise<boolean>; // is user authenticated in server?
  private __authenticated: boolean; // is user authenticated?
  private __socket_timeout: number; // socket timeout in seconds.
  private __socket_root: TSocketClient | TSocketServer; // socket client prefix | socket server suffix
  private __socket_type: TSocketIn; // client | server ?
  private __credentials: IUserLoginInput; // user's login credentials to login.
  private __store: IAppState; // store instance.

  constructor(
    credentials: IUserLoginInput,
    socket: Socket,
    store?: IAppState,
    auth?: IAuthState,
    server?: IAuthServerState,
    socket_timeout?: number,
    _socket_root: TSocketClient | TSocketServer = "_",
    _socket_type: TSocketIn = SOCKET_IN
  ) {
    super();
    this.__credentials = credentials;
    this.socket = socket;
    this.auth = store?.auth as IAuthState;
    this.__server = server as IAuthServerState;
    this.__server_auth = this.userLogin(this.__credentials);
    this.__socket_timeout = socket_timeout || 60; // 1 minute timeout.
    this.__authenticated = false;
    this.__socket_root = _socket_root;
    this.__socket_type = _socket_type;
    this.__store = store as IAppState;
  }

  /** 'POST' EMIT METHODS **/

  userLogin = async (
    credentials: IUserLoginInput,
    _instance_name = "userLogin"
  ): Promise<boolean> => {
    let socketAns = false;
    this.socket.emit(this.__socket_root + _instance_name, credentials);
    this.socket.on(
      this.__socket_root + _instance_name,
      (authState: boolean, serverAuthState?: IAuthServerState) => {
        if (authState) {
          this.__server = { ...serverAuthState } as IAuthServerState;
          socketAns = true;
        }
      }
    );
    /* Await socket answer */
    return await waitSeconds(this.__socket_timeout, socketAns);
  };

  /** 'GET' EMIT METHODS **/

  getServerAuthState = async (
    _instance_name = "serverAuthState"
  ): Promise<IAuthServerState | Error> => {
    if (this.__authenticated) {
      let socketAns = false;
      this.socket.emit(this.__socket_root + _instance_name);
      this.socket.on(
        _instance_name + this.__socket_root,
        (serverAuthState: IAuthServerState) => {
          this.__server = { ...serverAuthState };
          socketAns = true;
        }
      );
      /* Await socket answer */
      await waitSeconds(this.__socket_timeout, socketAns);
      return { ...this.__server };
    } else {
      return {
        message: `Socket Instance: ${_instance_name} -> User is not authentificated! Login first.`,
      } as Error;
    }
  };

  getServerG4ALID = async (
    _instance_name = "serverG4ALID"
  ): Promise<IG4ALID | Error> => {
    if (this.__authenticated) {
      let socketAns = false;
      this.socket.emit(this.__socket_root + _instance_name);
      this.socket.on(
        _instance_name + this.__socket_root,
        (serverG4ALID: IG4ALID) => {
          this.__server._g4alid = () => serverG4ALID;
          socketAns = true;
        }
      );
      /* Await socket answer */
      await waitSeconds(this.__socket_timeout, socketAns);
      return { ...this.__server._g4alid() };
    } else {
      return {
        message: `Socket Instance: ${_instance_name} -> User is not authentificated! Login first.`,
      } as Error;
    }
  };

  /** ON METHODS (LIVE DATA UPDATE) **/

  // TODO...
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-18 */
