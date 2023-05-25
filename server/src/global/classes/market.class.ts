/* @/global/classes/market.class.ts */

import INFT, {
  INFTHolder,
  INFTCollection,
} from "@/global/interfaces/nft.interfaces";
import IToken, { ITokenHolder } from "@/global/interfaces/token.interfaces";
import IMarketPlace, {
  IMarketOrder,
  IMarketComplete,
  IBid,
  IAsk,
  IBuy,
  ISell,
  ITrade,
  ITransfer,
  ITransaction,
} from "@/global/interfaces/market.interfaces";

/*** MARKETPLACE CLASS ***/

export default class CMarketPlace implements IMarketPlace {
  readonly sales: IMarketOrder[];
  readonly sold: IMarketOrder[];
  readonly canceled: IMarketOrder[];
  readonly timestamp: bigint; // Unix timestamp

  constructor() {
    this.sales = [];
    this.sold = [];
    this.canceled = [];
    this.timestamp = BigInt(Date.now());
  }
}

export class CMarketComplete implements IMarketComplete {
  readonly listings?: string[]; // all nft && token current listings.
  readonly tickers?: string[]; // all tickers.
  readonly symbols?: string[]; // all symbols.
  readonly types?: string[]; // nft || token.
  readonly bids?: IBid[]; // bids - offers to buy.
  readonly asks?: IAsk[]; // asks - offers to sell.
  readonly buys?: IBuy[]; // buy orders.
  readonly sells?: ISell[]; // sell orders.
  readonly trades?: ITrade[]; // trades - executed orders.
  readonly transfers?: ITransfer[]; // market transfers.
  readonly transactions?: ITransaction[]; // market transactions.
  readonly collections?: INFTCollection[]; // market nft collections.
  readonly nft_holders?: INFTHolder[]; // NFT holders.
  readonly token_holders?: ITokenHolder[]; // tokens holders.
  readonly public_nfts?: INFT[]; // market public NFTs.
  readonly public_tokens?: IToken[]; // market public Tokens.
  _private_nfts: () => INFT[]; // private NFTs.
  _private_tokens: () => IToken[]; // private Tokens.

  constructor(
    listings?: string[],
    tickers?: string[],
    symbols?: string[],
    types?: string[],
    bids?: IBid[],
    asks?: IAsk[],
    buys?: IBuy[],
    sells?: ISell[],
    trades?: ITrade[],
    transfers?: ITransfer[],
    transactions?: ITransaction[],
    collections?: INFTCollection[],
    nft_holders?: INFTHolder[],
    token_holders?: ITokenHolder[],
    public_nfts?: INFT[],
    public_tokens?: IToken[],
    private_nfts?: INFT[],
    private_tokens?: IToken[]
  ) {
    this.listings = listings;
    this.tickers = tickers;
    this.symbols = symbols;
    this.types = types;
    this.bids = bids;
    this.asks = asks;
    this.buys = buys;
    this.sells = sells;
    this.trades = trades;
    this.transfers = transfers;
    this.transactions = transactions;
    this.collections = collections;
    this.public_nfts = public_nfts;
    this.public_tokens = public_tokens;
    this.nft_holders = nft_holders;
    this.token_holders = token_holders;
    this._private_nfts = () => private_nfts as INFT[];
    this._private_tokens = () => private_tokens as IToken[];
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
