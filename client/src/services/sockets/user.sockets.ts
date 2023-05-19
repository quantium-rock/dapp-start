import { Socket } from "socket.io-client";
import { useNotification } from "@kyvg/vue3-notification";
// import { AuthServerState } from "@/global/interfaces";
import { useRouter } from "vue-router";
import useStore from "@/services/store";

const { notify } = useNotification();

export const usernameSocket = (socket: Socket): void => {
  // const store = useStore();
  // socket.emit("username", store.auth.userInput);
  socket.on("usernameRes", (exists: boolean) => {
    // store.auth.newUser = exists; // change whhen update to final store
  });
};

export const userAuthSocket = (
  socket: Socket,
  username: string,
  userToken: string
): void => {
  // const store = useStore();
  const router = useRouter();
  socket.emit("userAuth", userToken);
  socket.on("userAuthRes", (loggedIn: boolean) => {
    if (loggedIn) {
      // userAuthInfoSocket(socket, username, userToken);
      // store.auth.state = true;
      // store.auth.newUser = false;
      // store.ui.modals.login = false;
      router.push({ name: "home" });
      notify({
        title: "Success!",
        text: "You are now logged in!",
        type: "success",
      });
    } else {
      console.log("ERROR: Could not authenticate user. Please try again.");
      // store.ui.modals.login = true;
      // store.auth.newUser = true;
      // store.auth.state = false;
      notify({
        title: "Error",
        text: "Your authentication failed. Please try again.",
        type: "error",
      });
    }
    // store.auth.userInput = "";
  });
};

// export const userAuthInfoSocket = (
//   socket: Socket,
//   username: string,
//   userToken: string
// ): void => {
//   // const store = useStore();
//   socket.volatile.emit("authInfo", username, userToken);
//   socket.volatile.on("authInfoRes", (authInfo: AuthInfo) => {
//     console.log(authInfo);
//     // store.auth.info = { ...authInfo };
//     // store.user.username = authInfo.username;
//   });
// };

// export const createUserSocket = (socket: Socket, authInfo: AuthInfo): void => {
//   const store = useStore();
//   if (authInfo.username && authInfo.token.length > 22) {
//     socket.emit("createUser", authInfo);
//     socket.on("createUserRes", (created: boolean) => {
//       if (created) {
//         notify({
//           title: "Congrats! 🎉",
//           text: "New user created!",
//           type: "success",
//         });
//         userAuthInfoSocket(socket, authInfo.username, authInfo.token); // confirm authentification
//       } else {
//         store.ui.modals.login = true;
//         store.auth.newUser = true;
//         store.auth.state = false;
//         notify({
//           title: "Error",
//           text: "Your account creation failed. Please try again.",
//           type: "error",
//         });
//       }
//       store.auth.userInput = "";
//     });
//   } else {
//     console.log("ERROR: Could not create user. Connect your wallet first!");
//   }
// };
