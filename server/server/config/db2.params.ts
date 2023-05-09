import dotenv from "dotenv";
dotenv.config(); // init env varaibles

/* SECONDARY DB2 CONFIG CONSTANTS 
  Note: Set SECONDARY-DB-CONFIG routes to a relational/sequential CLOUD SQL-DB (scales vertically - Indexing algorithm)
*/
export const DB2_AUTHS =
  String(process.env.DB2_AUTHS) ||
  "ERROR: add .env check @/config/ global constants";
export const DB2_USERS =
  String(process.env.DB2_USERS) ||
  "ERROR: add .env check @/config/ global constants";
export const DB2_MESSAGES =
  String(process.env.DB2_MESSAGES) ||
  "ERROR: add .env check @/config/ global constants";
export const DB2_WALLETS =
  String(process.env.DB2_WALLETS) ||
  "ERROR: add .env check @/config/ global constants";
export const DB2_DAO =
  String(process.env.DB2_DAO) || // Community Governance
  "ERROR: add .env check @/config/ global constants";
export const DB2_MARKET =
  String(process.env.DB2_MARKET) || // Community Finance
  "ERROR: add .env check @/config/ global constants";
export const DB2_GAMES =
  String(process.env.DB2_GAMES) ||
  "ERROR: add .env check @/config/ global constants";
export const DB2_LOGS =
  String(process.env.DB2_LOGS) ||
  "ERROR: add .env check @/config/ global constants";

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-08 */
