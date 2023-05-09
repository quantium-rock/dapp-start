import { CHAIN_NAMESPACES } from "@web3auth/base";
import dotenv from "dotenv";
dotenv.config();

export const SERVER_URL =
  (process.env.VUE_APP_SERVER_URL as string) || "http://localhost:3000";
export const WEB3AUTH_CID = process.env.VUE_APP_WEB3AUTH_CID as string;
export const WEB3AUTH_KEY = process.env.VUE_APP_WEB3AUTH_KEY as string;

export const CHAIN_CONFIG = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x61",
  rpcTarget: "https://rpc.ankr.com/bsc_testnet_chapel",
  displayName: "Binance SmartChain Testnet",
  blockExplorer: "https://testnet.bscscan.com",
  ticker: "BNB",
  tickerName: "BNB",
};
