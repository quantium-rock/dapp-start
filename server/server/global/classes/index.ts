class AuthPublicStateDB implements AuthPublicState {
  __id__ = "";
  __token__ = "";
  _publicVerifications = {} as PublicVerifications;
  _connections = {} as SocialAccounts;
  _controls: AuthControls = new AuthControlsDB();
  _timestamps = {} as TimeStamps;
}
