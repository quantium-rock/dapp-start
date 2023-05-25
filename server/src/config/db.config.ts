require("dotenv").config();

export const MARKET_API = String(process.env.MARKET_API);
export const API_BEARER_TOKEN = String(process.env.API_BEARER_TOKEN);
export const MYSQL_HOST = String(process.env.MYSQL_HOST);
export const MYSQL_USER = String(process.env.MYSQL_USER);
export const MYSQL_PASSWORD = String(process.env.MYSQL_PASSWORD);
export const MYSQL_DB_NAME = String(process.env.MYSQL_DB_NAME);

console.log(MYSQL_DB_NAME);

/* @/config/db.config.ts */

// import { ServiceAccount } from "firebase-admin";
// import { FB_SA } from "./keys";
// import dotenv from "dotenv";
// dotenv.config(); // init env varaibles

/*** FIREBASE DBx CONFIG CONSTANTS 
    Note: Set Firebase connection keys. DBx -> non-relational/object-based cloud database (scales horizontally - hashing algorithm)
***/

// export const DBx_AUTHS = (): ServiceAccount | string =>
//   FB_SA || "ERROR: add .env check @/config/ global constants";

// if (typeof DBx_AUTHS === "string") {
//   console.error("ERROR: add FIREBASE JSON KEY into @/config/keys/*");
// }

/*** SQL DBy CONFIG CONSTANTS 
  Note: Set SQL connection keys. DBy -> relational cloud database (scales veritcally - indexing algorithm)
***/

// export const DBy_AUTHS = () =>
//   String(process.env.DBy_AUTHS) ||
//   "ERROR: add .env check @/config/ global constants";
// export const DBy_USERS = () =>
//   String(process.env.DBy_USERS) ||
//   "ERROR: add .env check @/config/ global constants";
// export const DBy_MESSAGES =
//   String(process.env.DBy_MESSAGES) ||
//   "ERROR: add .env check @/config/ global constants";
// export const DBy_WALLETS =
//   String(process.env.DBy_WALLETS) ||
//   "ERROR: add .env check @/config/ global constants";
// export const DBy_DAO =
//   String(process.env.DBy_DAO) || // Communtiy Governance
//   "ERROR: add .env check @/config/ global constants";
// export const DBy_MARKET =
//   String(process.env.DBy_MARKET) || // Communtiy Finance
//   "ERROR: add .env check @/config/ global constants";
// export const DBy_GAMES =
//   String(process.env.DBy_GAMES) ||
//   "ERROR: add .env check @/config/ global constants";
// export const DBy_LOGS =
//   String(process.env.DBy_LOGS) ||
//   "ERROR: add .env check @/config/ global constants";

// if (String(DBy_AUTHS).includes("ERROR")) {
//   console.error("ERROR: add .env check @/config/ global constants");
// }

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-18 */
