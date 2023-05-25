/* @/global/interfaces/wallet.interfaces.d.ts */

import { IToken } from "./token.interfaces";
import INFT, { INFTCollection } from "./nft.interfaces";
import {
  ITransfers,
  ITrade,
  ITransaction,
  IBuy,
  ISell,
  IFee,
} from "./market.interfaces";

/*** WALLET INTERFACES ***/

export default interface IUserWallets {
  uid?: string; // user's unique id (username, email, phone or token).
  ukey?: string; // user's auto-generated (124 bits) and mutable key.
  upin?: int; // user's pin (4-12 digits pin).
  uval?: number; // user's total 'value = max(fiat + crypto)*USD' (last 30 days).
  master?: string; // user's master wallet address (pubkey).
  tier?: int; // user's tier level (0-5).
  balances?: IBalances; // user's total balances (master + imported wallets).
  nfts?: INFT[]; // user's all nft collectibles, including imported wallets.
  collections?: INFTCollection[]; // user's all nft collectibles, including imported wallets.
  buys?: IBuy[]; // user's all buy orders (last 30 days).
  sells?: ISell[]; // user's all sell orders (last 30 days).
  transfers?: ITransfers[]; // user's wallet all transfers (last 30 days).
  trades?: ITrade[]; // user's wallet all trades (last 30 days).
  transactions?: ITransaction[]; // user's wallet all transactions (last 30 days).
  fees?: IFee[]; // user's wallet all fees (last 30 days).
  imported?: IWallet[]; // user's wallets external wallets.
}

export interface IWallet {
  pubkeys: string; // external user's wallet addresses.
  balances: IBalance; // user's wallet balances (fiat & crypto).
  collections: INFT; // user's NFT collections.
  buys: IBuy[]; // user's buy orders (last 30 days).
  sells: ISell[]; // user's sell orders (last 30 days).
  transfers: ITransfers; // user's wallet transfers (last 30 days).
  transactions: ITransaction; // user's wallet transactions (last 30 days).
  trades: ITrade[]; // user's wallet trades (last 30 days).
}

export interface IBalances {
  crypto: ICryptoBalances; // user's crypto balances.
  fiat: IFiatBalances; // user's fiat balances.
}

interface ICryptoBalances {
  btc: number;
  eth: number;
  sol: number;
  bnb: number;
  gfal: number;
  tokens: IToken[];
}

interface IFiatBalances {
  usd: number;
  eur: number;
  gbp: number;
  chf: number;
  jpy: number;
  cny: number;
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-15 */
