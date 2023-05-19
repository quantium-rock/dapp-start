/* @/config/index.ts */

import "./security.config";
import "./dby.config";
import "./dbx.config";
import "./dev.config";
import "./web3.config";

/*** SERVER CONFIGURATION ***/

export const CLIENT_URL = "https://portal.gamesforaliving.com";
export const SERVER_HTML = `
  <h1> Games for a Living - Portal Server </h1>
  <a href="${CLIENT_URL}"> G4AL PORTAL </a>
`;
export const OPENAI_KEY = String(process.env.OPENAI_KEY) || "";

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05- */
