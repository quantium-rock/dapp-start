/* @/config/index.ts */

import dotenv from "dotenv";
dotenv.config();

/*** APP CONFIG FILE ***/

/* Load Enviroment Variables */

export const CLIENT_URL = "";
export const SERVER_URL =
  (process.env.VUE_APP_SERVER_URL as string) || "http://localhost:3000";

/* Global App Variables */

export const SOCKET_RES_TIMEOUT = 30; // 30 seconds

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-16 */
