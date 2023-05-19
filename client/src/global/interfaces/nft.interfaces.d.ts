/* @/global/interfaces/nft.interfaces.d.ts */

/*** NFT INTERFACES ***/

export default interface INFT {
  token: string; // contract pubkey.
  creators: string[]; // creator pubkey.
  royalty: number; // royalty percentage. 0.-1
  minter: string; // minter pubkey.
  floor: number; // nft floor price.
  supply: number; // total nft supply.
  collection: string; // collection pubkey.
  name: string; // nft name.
  description: string; // nft description.
  image: string; // main image url.
  assets: INFTAssets; // nft assets.
  attributes: INFTAttribute[]; // nft attributes metadata.
  rarities: INFTAttribute[]; // nft rarities metadata.
  rarity: number; // 0-100
  holders: INFTHolder[]; // nft holders.
  trackrecord: INFTTrackRecord[]; // nft track record.
  history: INFTHistory[]; // nft trading history.
  mint: INFTMint; // mint record.
  burn: INFTBurn; // burn record.
}

export interface INFTCollection {
  token: string; // contract pubkey.
  creators: string[]; // creator pubkey.
  royalty: number; // royalty percentage. 0.-1
  minters: string[]; // minter pubkey.
  symbol: string; // collection symbol.
  name: string; // collection name.
  description: string; // collection description.
  floor: number; // collection floor price.
  supply: number; // total collection nft supply.
  nfts: INFT[]; // all collection nfts.
  image: string; // main collection image url.
  video?: string; // main collection video url.
  audio?: string; // main collection audio url.
  model?: string; // main collection 3D model url.
  document?: string; // main collection document url.
  attributes: INFTAttribute[]; // collection attributes metadata.
  rarities: INFTAttribute[]; // collection rarities metadata.
  trackrecord: INFTTrackRecord[]; // collection track record metadata.
  mintable: boolean; // if nfts are mintable.
  burnable: boolean; // if nfts are burnable.
}

export interface INFTHolder {
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
