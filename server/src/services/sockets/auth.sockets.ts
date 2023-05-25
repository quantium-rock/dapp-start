/* @/services/sockets/auth.sockets.ts */

import {
  TSocket,
  TSocketIn,
  TChannelClient,
  TChannelServer,
} from "@/global/types/custom/socket.types";
import { IAuthSockets } from "@/global/interfaces/sockets.interfaces";
import IAuthState, {
  IAuthServerState,
  IG4ALID,
  IUserLoginInput,
} from "@/global/interfaces/auth.interfaces";
import CAuthState from "@/global/classes/auth.class";
import { waitSeconds } from "@/global/utils";
import { SOCKET_IN } from "@/config/sockets.config";

/*** AUTHENTICATION SOCKETS CLASS ***/

export default class AuthSockets extends CAuthState implements IAuthSockets {
  readonly _auth: () => IAuthState; // specific store instance.
  readonly _socket: () => TSocket; // socket instance.
  // private __server_auth?: Promise<boolean>; // is server authenticated?
  private __server: IAuthServerState; // server authentification private state.
  private __socket_timeout: number; // socket timeout in seconds.
  private __socket_root: TChannelClient | TChannelServer; // socket client preffix | socket server suffix
  private __socket_in: TSocketIn; // client | server ?
  private __socket_end: string;
  private __socket_sta: string;
  private __socketChannel = (_name: string) =>
    this.__socket_sta + _name + this.__socket_end;

  constructor(
    socket: TSocket,
    _socket_in: TSocketIn = SOCKET_IN,
    _socket_root: TChannelClient | TChannelServer = "_",
    _socket_timeout = 30 // 30 seconds.
  ) {
    super();
    this._auth = () => this;
    this._socket = () => socket;
    this.__server = {} as IAuthServerState;
    this.__socket_root = _socket_root;
    this.__socket_in = _socket_in;
    this.__socket_end = this.__socket_in === "client" ? this.__socket_root : "";
    this.__socket_sta = this.__socket_in === "client" ? "" : this.__socket_root;
    this.__socket_timeout = _socket_timeout;
  }

  /** 'POST' EMIT METHODS **/

  async userLogin(
    credentials: IUserLoginInput,
    _instance_name = "userLogin"
  ): Promise<boolean> {
    let socketAns = false;
    this._socket().emit(this.__socketChannel(_instance_name), credentials);
    this._socket().on(
      this.__socketChannel(_instance_name),
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
  }

  /** 'GET' EMIT METHODS **/

  getServerAuthState = async (
    _instance_name = "serverAuthState"
  ): Promise<IAuthServerState | Error> => {
    if (this._auth()._server?.().__authenticated) {
      let socketAns = false;
      this._socket().emit(this.__socketChannel(_instance_name));
      this._socket().on(
        this.__socketChannel(_instance_name),
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
    if (this._auth()._server?.().__authenticated) {
      let socketAns = false;
      this._socket().emit(this.__socketChannel(_instance_name));
      this._socket().on(
        this.__socketChannel(_instance_name),
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
