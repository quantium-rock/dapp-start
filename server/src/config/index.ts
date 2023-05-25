/* @/config/index.ts */

import "./db.config";
import "./dev.config";
import "./security.config";
import "./web3.config";

/*** SERVER APP ENVIROMENT CONSTANTS ***/

export const CLIENT_URL = "https://portal.gamesforaliving.com";
export const SERVER_URL = "https://portal-server.gamesforaliving.com";
export const SERVER_HTML = `
  <h1> Games for a Living - Portal Server </h1>
  <a href="${CLIENT_URL}"> G4AL PORTAL </a>
`;
export const OPENAI_KEY = String(process.env.OPENAI_KEY) || "";

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-21 */
