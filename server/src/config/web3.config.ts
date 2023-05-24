/* @/config/web3.config.ts */

import dotenv from "dotenv";
dotenv.config(); // init env varaibles

/*** BLOCKCHAIN & WEB3 PARAMS ***/

export const MARKETPLACE_ADDRESS = String(process.env.MARKETPLACE_ADDRESS);

export const BSCSCAN_API_KEY = String(process.env.BSCSCAN_API_KEY);

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-08 */
