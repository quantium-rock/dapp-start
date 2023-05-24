/* @/global/interfaces/market.interfaces.d.ts */

import { MarketAction, MarketCCY } from "@/global/types/custom/market.types";
import INFT, { INFTHolder, INFTCollection } from "./nfts.interfaces";
import IToken, { ITokenHolder } from "./tokens.interfaces";

/*** MARKETPLACE INTERFACES ***/

export default interface IMarketPlace {
  sales: IMarketOrder[];
  sold: IMarketOrder[];
  canceled: IMarketOrder[];
  timestamp: bigint; // Unix timestamp
}

export interface IMarketOrder {
  type: MarketAction;
  asset: INFT;
  amount: int;
  price: number;
  fee: number; // Marketplaces fee
  network: number; // Blockchain fee
  ccy: MarketCCY; // $GFAL, USD
  datetime: string; // YYYY-MM-DD HH:mm:ss
  timestamp: bigint; // Unix timestamp
}

export interface IMarketComplete {
  listings?: string[]; // all nft && token current listings.
  tickers?: string[]; // all tickers.
  symbols?: string[]; // all symbols.
  types?: string[]; // nft || token.
  bids?: IBid[]; // bids - offers to buy.
  asks?: IAsk[]; // asks - offers to sell.
  buys?: IBuy[]; // buy orders.
  sells?: ISell[]; // sell orders.
  trades?: ITrade[]; // trades - executed orders.
  transfers?: ITransfer[]; // market transfers.
  transactions?: ITransaction[]; // market transactions.
  collections?: INFTCollection[]; // market nft collections.
  nft_holders?: INFTHolder[]; // NFT holders.
  token_holders?: ITokenHolder[]; // tokens holders.
  public_nfts?: INFT[]; // market public NFTs.
  public_tokens?: IToken[]; // market public Tokens.
  _private_nfts?(): INFTAssets[]; // private NFTs.
  _private_tokens?(): ITokenAssets[]; // private Tokens.
}

// Sale Status ACTIVE
export interface ISold {
  sale_id: number;
  token_id: number;
  amount: number;
  price: number;
  isDollar: boolean;
  seller: string;
  buyer: string;
  contract: string;
  status: string;
  created_at: string;
  seller_revenue: number;
  royalties: number;
}

// Sale Status SOLD
export interface IOnSale {
  sale_id: number;
  token_id: number;
  amount: number;
  price: number;
  isDollar: boolean;
  seller: string;
  contract: string;
  created_at: string;
}

// Sale Status REMOVED
export interface IRemoved {
  sale_id: number;
  token_id: number;
  amount: number;
  price: number;
  isDollar: boolean;
  seller: string;
  contract: string;
  created_at: string;
}

export interface IBuy {
  uid: string; // user's unique id (username, email, phone or token).
  buyer: string; // buyer public key.
  asset: string; // asset public key.
  ticker: string; // asset unique ticker.
  symbol?: string; // asset unique symbol.
  bbo: number; // last best bid offer.
  price: number; // asset buy-trade price.
  amount: int; // asset buy-trade amount.
  fee: IFee; // network fee.
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
}

export interface ISell {
  seller: string; // seller public key.
  asset: string; // asset public key.
  ticker: string; // asset unique ticker.
  symbol?: string; // asset unique symbol.
  bao: number; // last best ask offer.
  price: number; // asset sell-trade price.
  amount: int; // asset sell-offer amount.
  fee: IFee; // network fee.
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
}

export interface IBid {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
  buyer: string; // buyer public key.
  asset: string; // asset public key.
  ticker: string; // asset unique ticker.
  symbol?: string; // asset unique symbol.
  bbo: number; // last best bid offer.
  price: number; // asset buy-offer price.
  amount: int; // asset buy-offer amount.
  fee: IFee; // network fee.
}

export interface IAsk {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
  seller: string; // seller public key.
  asset: string; // asset public key.
  ticker: string; // asset unique ticker.
  symbol?: string; // asset unique symbol.
  bao: number; // last best ask offer.
  price: number; // asset sell-offer price.
  amount: int; // asset sell-offer amount.
  fee: IFee; // network fee.
}

export interface ITransfer {
  sender: string; // sender pubkey.
  receiver: string; // receiver pubkey.
  ccy: string; // currency.
  amount: number;
  cons?: number; // blockchain confirmations.
  fee: IFee; // network fee.
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
}

export interface ITrade {
  pubkey: string; // wallet public address.
  asset: string; // asset pubkey.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  amount: int; // asset amount.
  price: number; // asset price.
  vwap: number; // volume weighted average price.
  cons?: int; // blockchain confirmations.
  fee: IFee; // network fee.
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
}

export interface ITransaction {
  sender: ITransfer;
  receiver: ITrade;
  cons?: int; // blockchain confirmations.
  fee: IFee; // network fee.
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
}

export interface IFee {
  ccy: string; // currency fee.
  fee: number; // network fee.
  per: number; // percentage repect the total ammount. 0.-1
  timestamp: bigint; // epoch milliseconds.
}

export interface IAssetRecords {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
  asset: string; // asset pubkey.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  type?: string; // asset type.
  ccy?: string; // asset currency.
  prices: IPrice[]; // historical prices.
  stats: IAssetStats; // asset statistics.
}

export interface IAssetStats {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  asset: string; // asset pubkey.
  ccy?: string; // asset currency.
  avg_prices: IAvgPrices; // average prices.
  med_prices: IMedPrices; // median prices.
  max_prices: IMaxPrices; // maximum prices.
  min_prices: IMinPrices; // minimum prices.
  volumes: IVolPrices; // trading volumnes.
  vwaps: IVwapPrices; // volume weighted average prices.
}

interface IPrice {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  asset: string; // asset pubkey.
  ccy?: string; // asset currency.
  ask: number; // ask price.
  askVol: number; // ask volume.
  mid: number; // mid (ask+bid+trades)/3 price.
  midVol: number; // mid (askVol+bidVol)/2 volume.
  bid: number; // bid price.
  bidVol: number; // bid volume.
  last: number; // last trade price.
  vol: number; // last trade volume.
  vwap: number; // last volume weighted average price.
}

interface IAvgPrices {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  asset: string; // asset pubkey.
  ccy?: string; // asset currency.
  total: number; // total average mids (asks+bids+trades)/3 price.
  last24: number; // last day avg mids (asks+bids+trades)/3 price.
  last120: number; // last week avg mids (asks+bids+trades)/3 price.
  last480: number; // last month avg mids (asks+bids+trades)/3 price.
  last5760: number; // last year avg mids (asks+bids+trades)/3 price.
  datetime: string; // YYY-MM-DD hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
}

interface IMedPrices {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.
  timestamp: bigint; // epoch milliseconds.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  asset: string; // asset pubkey.
  ccy?: string; // asset currency.
  total: number; // total medium mids (asks+bids+trades)/3 price.
  last24: number; // last day med mids (asks+bids+trades)/3 price.
  last120: number; // last week med mids (asks+bids+trades)/3 price.
  last480: number; // last month med mids (asks+bids+trades)/3 price.
  last5760: number; // last year med mids (asks+bids+trades)/3 price.
}

interface IMaxPrices {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.  timestamp: bigint; // epoch milliseconds.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  asset: string; // asset pubkey.
  ccy?: string; // asset currency.
  total: number; // total minimum mids (asks+bids+trades)/3 price.
  last24: number; // last day min mids (asks+bids+trades)/3 price.
  last120: number; // last week min mids (asks+bids+trades)/3 price.
  last480: number; // last month min mids (asks+bids+trades)/3 price.
  last5760: number; // last year min mids (asks+bids+trades)/3 price.
}

interface IMinPrices {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.  timestamp: bigint; // epoch milliseconds.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  asset: string; // asset pubkey.
  ccy?: string; // asset currency.
  total: number; // total minimum mids (asks+bids+trades)/3 price.
  last24: number; // last day min mids (asks+bids+trades)/3 price.
  last120: number; // last week min mids (asks+bids+trades)/3 price.
  last480: number; // last month min mids (asks+bids+trades)/3 price.
  last5760: number; // last year min mids (asks+bids+trades)/3 price.
}

interface IVolumes {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.  timestamp: bigint; // epoch milliseconds.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  asset: string; // asset pubkey.
  ccy?: string; // asset currency.
  total: number; // total trading volume.
  last24: number; // last day volume.
  last120: number; // last week volume.
  last480: number; // last month volume.
  last5760: number; // last year volume.
}

interface IVWaps {
  date: string; // YYY-MM-DD utc.
  time: string; // hh:mm:ss utc.  timestamp: bigint; // epoch milliseconds.
  ticker: string; // asset ticker.
  symbol?: string; // asset currency.
  asset: string; // asset pubkey.
  ccy?: string; // asset currency.
  total: number; // total volume weighted average price.
  last24: number; // last day volume weighted average price.
  last120: number; // last week volume weighted average price.
  last480: number; // last month volume weighted average price.
  last5760: number; // last year volume weighted average price.
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
