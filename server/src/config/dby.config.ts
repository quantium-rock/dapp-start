/* @/config/dby.config.ts */

import dotenv from "dotenv";
dotenv.config(); // init env varaibles

/*** SECONDARY DBy CONFIG CONSTANTS 
  Note: Set PRIMARY-DB-CONFIG routes to a non-relational/object-based CLOUD DB (scales horizontally - Hashing algorithm)
***/

export const DB_AUTHS =
  String(process.env.DB2_AUTHS) ||
  "ERROR: add .env check @/config/ global constants";
export const DB_USERS =
  String(process.env.DB_USERS) ||
  "ERROR: add .env check @/config/ global constants";
export const DB_MESSAGES =
  String(process.env.DB_MESSAGES) ||
  "ERROR: add .env check @/config/ global constants";
export const DB_WALLETS =
  String(process.env.DB_WALLETS) ||
  "ERROR: add .env check @/config/ global constants";
export const DB_DAO =
  String(process.env.DB_DAO) || // Communtiy Governance
  "ERROR: add .env check @/config/ global constants";
export const DB_MARKET =
  String(process.env.DB_MARKET) || // Communtiy Finance
  "ERROR: add .env check @/config/ global constants";
export const DB_GAMES =
  String(process.env.DB_GAMES) ||
  "ERROR: add .env check @/config/ global constants";
export const DB_LOGS =
  String(process.env.DB_LOGS) ||
  "ERROR: add .env check @/config/ global constants";

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-08 */
