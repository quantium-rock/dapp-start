/* @/services/sockets/user.sockets.ts */

import { TSocket } from "@/global/types/custom/socket.types";
import {
  TSocketIn,
  TChannelServer,
  TChannelClient,
} from "@/global/types/custom/socket.types";
import { IUserSockets } from "@/global/interfaces/sockets.interfaces";
import IUserProfile from "@/global/interfaces/user.interfaces";
import CUserProfile from "@/global/classes/user.class";
import { sleepSeconds } from "@/global/utils";
import { SOCKET_IN, SOCKET_TIMEOUT } from "@/config/sockets.config";

/*** USER PROFILE SOCKETS CLASS ***/

export default class UserSockets extends CUserProfile implements IUserSockets {
  _user: () => IUserProfile; // specific store instance.
  readonly _socket: () => TSocket; // socket instance.

  private __socket_timeout: number; // socket timeout in seconds.
  private __socket_root: TChannelServer | TChannelClient; // socket client prefix | socket server suffix
  private __socket_in: TSocketIn; // client | server ?
  private __socket_end: string;
  private __socket_sta: string;
  private __socketChannel = (_name: string) =>
    this.__socket_sta + _name + this.__socket_end;

  constructor(
    socket: TSocket,
    _socket_in: TSocketIn = SOCKET_IN,
    _socket_root: TChannelServer | TChannelClient = "_",
    _socket_timeout: number = SOCKET_TIMEOUT
  ) {
    super();
    this._user = () => this;
    this._socket = () => socket;
    this.__socket_root = _socket_root;
    this.__socket_in = _socket_in;
    this.__socket_end = this.__socket_in === "client" ? this.__socket_root : "";
    this.__socket_sta = this.__socket_in === "client" ? "" : this.__socket_root;
    this.__socket_timeout = _socket_timeout;
  }

  async getProfile(
    uid: string,
    _channel_name = "userProfile"
  ): Promise<IUserProfile> {
    this._socket().emit(this.__socketChannel(_channel_name), uid);
    this._socket().on(
      this.__socketChannel(_channel_name),
      (userProfile: IUserProfile) => {
        if (userProfile) {
          this._user = () => userProfile;
        }
      }
    );
    /* Await socket answer */
    await sleepSeconds(this.__socket_timeout);
    return this._user();
  }

  async updateProfile(
    profile: IUserProfile,
    _channel_name = "userProfile"
  ): Promise<IUserProfile> {
    this._socket().emit(this.__socketChannel(_channel_name), profile);
    this._socket().on(
      this.__socketChannel(_channel_name),
      (userProfile: IUserProfile) => {
        this._user = () => userProfile;
      }
    );
    /* Await socket answer */
    await sleepSeconds(this.__socket_timeout);
    return this._user();
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
