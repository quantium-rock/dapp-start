// /* @/services/apis/token/index.ts */

// // TODO -> Cristian

// // import { unixTime } from "./dateFunctions";
// // import TokenParser from "./TokenParser";
// //import Auth from "@/api/Auth/Auth";

// /**
//  * TokenStorage class
//  * @type {{set(*, *): void, get(): Promise<string|*>, remove(): void}}
//  */
// const TokenStorage = {
//   /**
//    * Get the stored JWT token if stored. Refresh it if expired. This is used inside the Ajax.js library to dynamically refresh the token before API calls.
//    * @returns {Promise<string|*>}
//    */
//   async get() {
//     let token = localStorage.getItem("token");

//     if (token) {
//       const expiry = localStorage.getItem("token-expiry");
//       const expiryInt = expiry ? parseInt(expiry, 10) : 0;

//       // if expired : remove token --> we will force the user to relogin (no refresh available in new the gfal-id-api)
//       if (expiryInt < unixTime()) {
//         token = null;
//         this.remove();
//         //let refreshToken = localStorage.getItem('token-refresh') // get the previously stored refreshToken
//         //TokenStorage.remove() // removing old tokens
//         //let response = await Auth.postRefresh({refreshToken: refreshToken}) // get new ones
//         //TokenStorage.set(response.access_token, response.refresh_token) // store them
//         //return response.access_token // return the access one to perform the call if called by Ajax.js
//       }
//     }
//     return token; // it could be null but it's fine
//   },
//   /**
//    * Set JWT token and refreshToken for further use and refresh to localStorage
//    * @param token
//    * @param refreshToken
//    */
//   set(token, refreshToken) {
//     //Warning! : refreshToken is no longer used!

//     let parsed = new TokenParser(token);
//     localStorage.setItem("token", token);
//     localStorage.setItem("token-refresh", refreshToken);
//     localStorage.setItem("token-expiry", parsed.getClaim("exp"));
//     localStorage.setItem("token-uid", parsed.getClaim("uid"));
//   },
//   /**
//    * Remove the JWT token and refreshToken from localStorage
//    */
//   remove() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("token-refresh");
//     localStorage.removeItem("token-expiry");
//     localStorage.removeItem("token-uid");
//   },
// };

// export default TokenStorage;

// /* END OF SCRIPT */
// /* v1.0 */
// /* Last update: 2023-05-21 */
