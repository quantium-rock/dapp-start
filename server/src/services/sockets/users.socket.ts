import { Socket } from "socket.io";
import { Client } from "pg";

// import {
//   usernameExists_ctrl,
//   getUserToken,
//   getAuthState,
//   updateLastLogin,
//   // createUser,
// } from "../../controllers/sql/users.controller";
// import { UserSign } from "../../global/types";
// import { AuthState } from "../../global/interfaces";

// export const userSignSocket = (db: Client, socket: Socket): void => {
//   socket.on("_userSign", async (username: string) => {
//     let userSign: UserSign = "signup";
//     if (await usernameExists_ctrl(db, username)) userSign = "login";
//     socket.emit("userSign_", userSign);
//   });
// };

// export const userAuthSocket = (socket: Socket): void => {
//   socket.on("userAuth", async (username: string, token: string) => {
//     if (username && token && token.length > 22) {
//       const userToken = await getUserToken(username);
//       let auth = false;
//       if (userToken === token) {
//         auth = true;
//         await updateLastLogin(username, token);
//       }
//       socket.emit("userAuthRes", auth);
//     }
//   });
// };

// export const authInfoSocket = (socket: Socket): void => {
//   socket.on("authInfo", async (username: string, token: string) => {
//     if (username && token && token.length > 22) {
//       const userToken = await getUserToken(username);
//       if (userToken === token) {
//         socket.emit("authInfoRes", await getAuthInfo(username, token));
//       }
//     }
//   });
// };

// export const createUserSocket = (socket: Socket): void => {
// socket.on("createUser", async (authInfo: AuthState) => {
// if (authInfo.username && authInfo.token.length > 22) {
// socket.emit("createUserRes", await createUser(authInfo));
// } else {
// socket.emit("createUserRes", false);
// }
// });
// };
//
