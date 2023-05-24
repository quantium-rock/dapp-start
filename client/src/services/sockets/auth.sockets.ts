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
import CAuthState from "@/global/classes/auth.class";
import { Socket } from "socket.io-client"; // "socket.io" in server !!!

const SOCKET_IN: TSocketIn = "client"; // 'client' | 'server' !!!

/*** AUTHENTICATION SOCKETS ***/

export default class AuthSockets extends CAuthState implements IAuthSockets {
  readonly _auth: () => IAuthState; // specific store instance.
  readonly _socket: () => Socket; // socket instance.
  readonly __server_auth: Promise<boolean>; // is server authenticated?
  private __authenticated: boolean; // is user authenticated?
  private __server: IAuthServerState; // server authentification private state.
  private __socket_timeout: number; // socket timeout in seconds.
  private __socket_root: TSocketClient | TSocketServer; // socket client prefix | socket server suffix
  private __socket_in: TSocketIn; // client | server ?
  private __socket_end: string;
  private __socket_sta: string;

  constructor(
    credentials: IUserLoginInput,
    socket: Socket,
    socket_timeout?: number,
    _socket_root: TSocketClient | TSocketServer = "_",
    _socket_in: TSocketIn = SOCKET_IN
  ) {
    super();
    this._auth = () => this;
    this._socket = () => socket;
    this.__server_auth = this.userLogin(credentials);
    this.__server = {} as IAuthServerState;
    this.__socket_timeout = socket_timeout || 30; // 30 minute timeout.
    this.__authenticated = false;
    this.__socket_root = _socket_root;
    this.__socket_in = _socket_in;
    this.__socket_end = this.__socket_in === "client" ? this.__socket_root : "";
    this.__socket_sta = this.__socket_in === "client" ? "" : this.__socket_root;
  }

  /** 'POST' EMIT METHODS **/

  userLogin = async (
    credentials: IUserLoginInput,
    _instance_name = "userLogin"
  ): Promise<boolean> => {
    let socketAns = false;
    const instance = this.__socket_sta + _instance_name + this.__socket_end;
    console.log("Sent Login! ", instance);
    this._socket().emit(instance, credentials);
    this._socket().on(
      instance,
      (authState: boolean, serverAuthState?: IAuthServerState) => {
        console.log(authState, serverAuthState);
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
      this._socket().emit(
        this.__socket_sta + _instance_name + this.__socket_end
      );
      this._socket().on(
        this.__socket_sta + _instance_name + this.__socket_end,
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
      this._socket().emit(
        this.__socket_sta + _instance_name + this.__socket_end
      );
      this._socket().on(
        this.__socket_end + _instance_name + this.__socket_end,
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
/* Last update: 2023-05-23 */
