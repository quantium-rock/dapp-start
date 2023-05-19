// import {
//   AuthState,
//   AuthConnection,
//   AuthControls,
// } from "../../__/controllers/sql/schemas/__auths__.tables";

// export function getAuthState(
//   authsDB: AuthsDB[],
//   connectionsToBeVerified = 2, // Min connections to get verified (to discuss)
//   newUserDays = 30 // how many days to consider a user not new (to discuss)
// ): AuthState {
//   const authState = {} as AuthState;
//   const authControls: AuthControls = {
//     authenticated: false,
//     verified: false,
//     userInput: "",
//     newUser: true,
//   };
//   const nowTime = BigInt(Date.now());
//   const newUserDaysInTime = BigInt(
//     newUserDays * 24 * 60 * 60 * 1000 // Days in milliseconds
//   );
//   if (authsDB.length > 0) {
//     authState.username = authsDB[0].__username__;
//     for (const auth of authsDB) {
//       if (auth.__token__) authState.accounts.tokens.push(auth.__token__);
//       else
//         console.log(
//           `\n\nERROR: No token found for connection ${auth.__username__}. \nPlease, verify db and ctrls...`
//         );
//       if (auth._email) authState.accounts.emails.push(auth._email);
//       if (auth._phone) authState.accounts.phones.push(auth._phone);
//       if (auth._pubkey) authState.accounts.pubkeys.push(auth._pubkey);
//       const authConnection: AuthConnection = {
//         token: auth.__token__,
//         email: auth._email,
//         phone: auth._phone,
//         pubkey: auth._pubkey,
//         pfp: auth._pfp,
//         provider: auth._provider,
//         aggregator: auth._aggregator,
//         type: auth._type,
//         dapp: auth._dapp,
//         oauth: auth._oauth,
//         oauth_id: auth._oauth_id,
//         last_login: BigInt(auth._last_login),
//         created_at: BigInt(auth._created_at),
//       };
//       authState.connections.push(authConnection);
//       const userSinceInTime: BigInt = nowTime - authConnection.created_at;
//       if (authControls.newUser && userSinceInTime > newUserDaysInTime) {
//         authControls.newUser = false;
//       }
//     }
//     // Remove duplicates
//     authState.accounts.tokens = [...new Set(authState.accounts.tokens)];
//     authState.accounts.emails = [...new Set(authState.accounts.emails)];
//     authState.accounts.phones = [...new Set(authState.accounts.phones)];
//     authState.accounts.pubkeys = [...new Set(authState.accounts.pubkeys)];
//     // Update authentification controls
//     authControls.authenticated = true;
//     authControls.verified =
//       authsDB.length > connectionsToBeVerified ? true : false;
//   }
//   authState.controls = { ...authControls };
//   return authState;
// }
