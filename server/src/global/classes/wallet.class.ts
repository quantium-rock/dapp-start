/* @/global/classes/wallet.class.ts */

import INFT, { INFTCollection } from "@/global/interfaces/nft.interfaces";
import {
  IBuy,
  ISell,
  ITransfer,
  ITrade,
  ITransaction,
  IFee,
} from "@/global/interfaces/market.interfaces";
import IUserWallet, {
  IWallet,
  IBalances,
} from "@/global/interfaces/wallet.interfaces";

/*** USER WALLET CLASS */

export default class CUserWallet implements IUserWallet {
  uid?: string; // user's unique id (username, email, phone or token).
  ukey?: string; // user's auto-generated (124 bits) and mutable key.
  upin?: number; // user's pin (4-12 digits pin).
  uval?: number; // user's total 'value = max(fiat + crypto)*USD' (last 30 days).
  master?: string; // user's master wallet address (pubkey).
  tier?: number; // user's tier level (0-5).
  balances?: IBalances; // user's total balances (master + imported wallets).
  nfts?: INFT[]; // user's all nft collectibles, including imported wallets.
  collections?: INFTCollection[]; // user's all nft collectibles, including imported wallets.
  buys?: IBuy[]; // user's all buy orders (last 30 days).
  sells?: ISell[]; // user's all sell orders (last 30 days).
  transfers?: ITransfer[]; // user's wallet all transfers (last 30 days).
  trades?: ITrade[]; // user's wallet all trades (last 30 days).
  transactions?: ITransaction[]; // user's wallet all transactions (last 30 days).
  fees?: IFee[]; // user's wallet all fees (last 30 days).
  imported?: IWallet[]; // user's wallets external wallets.

  constructor(
    uid?: string,
    ukey?: string,
    upin?: number,
    uval?: number,
    tier?: number,
    master?: string,
    balances?: IBalances,
    nfts?: INFT[],
    collections?: INFTCollection[],
    buys?: IBuy[],
    sells?: ISell[],
    transfers?: ITransfer[],
    trades?: ITrade[],
    transactions?: ITransaction[],
    fees?: IFee[],
    imported?: IWallet[]
  ) {
    this.uid = uid;
    this.ukey = ukey;
    this.upin = upin;
    this.uval = uval;
    this.tier = tier;
    this.master = master;
    this.balances = balances;
    this.nfts = nfts;
    this.collections = collections;
    this.buys = buys;
    this.sells = sells;
    this.transfers = transfers;
    this.transactions = transactions;
    this.trades = trades;
    this.fees = fees;
    this.imported = imported;
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-16 */
