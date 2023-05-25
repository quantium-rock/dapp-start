/* @/global/interfaces/token.interfaces.d.ts */

/*** TOKEN INTERFACES ***/

export default interface IToken {
  token: string; // contract pubkey.
  collection: string; // collection pubkey.
  name: string; // nft name.
  description: string; // nft description.
  image: string; // main image url.
  video?: string; // token video url.
  audio?: string; // token audio url.
  model?: string; // token 3D model url.
  document?: string; // token document url.
  rarity: number; // 0-100
  holders: ITokenHolder[]; // token holders.
  history: ITokenHistory[]; // token trading history.
  mint: ITokenMint; // mint record.
  burn: ITokenBurn; // burn record.
}

export interface ITokenHolder {
  pubkey: string; // nft owner pubkey.
  token: string; // contract pubkey.
  uid?: string; // holder uid.
  name?: string; // holder name.
  date: string; // YYYY-MM-DD utc.
  time: string; // HH:MM:SS utc.
  timestamp: bigint; // unix timestamp.
}

export interface ICryptoBalances {
  btc: number;
  eth: number;
  sol: number;
  bnb: number;
  gfal: number;
  tokens: IToken[];
}

export interface IToken {
  pubkey: string;
  symbol: string;
  amount: number;
}

export interface IFiatBalances {
  usd: number;
  eur: number;
  gbp: number;
  chf: number;
}

export interface INFTAttribute {
  trait: string;
  value: string;
  rarity: number; // 0-100
}

export interface INFTTrackRecord {
  owner: string; // nft owner pubkey.
  type: string; // minted, upgraded, sold, tournments, kills, stats, etc.
  value: string; // value of the track record.
  date: string; // YYYY-MM-DD utc.
  time: string; // HH:MM:SS utc.
  timestamp: bigint; // unix timestamp.
}

export interface INFTHistory {
  seller: string;
  buyer: string;
  price: number;
  ccy: string;
  hash: string; // transaction hash.
  date: string; // YYYY-MM-DD utc.
  time: string; // HH:MM:SS utc.
  timestamp: bigint; // unix timestamp.
}

export interface INFTMint {
  authority: string; // authority pubkey.
  minter: string; // mienter pubkey.
  floor: number; // floor price.
  fee: IFeedFee; //
  ccy: string; // currency.
  hash: string; // mint hash.
  date: string; // YYYY-MM-DD utc.
  time: string; // HH:MM:SS utc.
  timestamp: bigint; // unix timestamp.
}

export interface INFTMint {
  authority: string; // authority pubkey.
  minter: string; // mienter pubkey.
  floor: number; // floor price.
  ccy: string; // currency.
  hash: string; // mint hash.
  date: string; // YYYY-MM-DD utc.
  time: string; // HH:MM:SS utc.
  timestamp: bigint; // unix timestamp.
}

export interface INFTAssets {
  images: string[];
  videos: string[];
  audios: string[];
  models: string[]; // 3D models.
  documents: string[];
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
