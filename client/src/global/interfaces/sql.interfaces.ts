export interface AuthsDB {
  __username__: string;
  __token__: string;
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
  _last_login: number;
  _created_at: number;
}

export interface UsersDB {
  __username__: string;
  _verified: boolean;
  _description: string;
  _url: string;
  _pfp: string;
  _mood: string;
  _firstName: string;
  _lastName: string;
  _lang: string;
  _age: number;
  _gender: string;
  _handees: string;
  _nationality: string;
  _country: string;
  _flag: string;
  _city: string;
  _timezone: string;
  _gmt: number;
  _g4alXP: number;
  _achievements: string;
  _topics: string;
  _updated_at: number;
  _created_at: number;
}
