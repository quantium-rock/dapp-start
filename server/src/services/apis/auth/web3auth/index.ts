// /* @/services/apis/auth/index.ts */

// import { Web3Auth, LoginParams } from "@web3auth/node-sdk";
// import {
//   WALLET_ADAPTERS,
//   CHAIN_NAMESPACES,
//   SafeEventEmitterProvider,
// } from "@web3auth/base";

// function web3authLogin = async () => {
//   const WEB3AUTH_CLIENT_ID =
//     "BCUDbtKqHKHHp_juQ4fd-vekT41t2MBTANNjxcysVGfeJoBzW2RVaTNKqUaxMjF6t-daed_3NRVDgNqWhnw4dHk";

//   const CHAIN_CONFIG = {
//     chainNamespace: CHAIN_NAMESPACES.EIP155,
//     chainId: "0x61",
//     rpcTarget: "https://rpc.ankr.com/bsc_testnet_chapel",
//     displayName: "Binance SmartChain Testnet",
//     blockExplorer: "https://testnet.bscscan.com",
//     ticker: "BNB",
//     tickerName: "BNB",
//   };
//   const web3auth = new Web3Auth({
//     clientId: WEB3AUTH_CLIENT_ID,
//     web3AuthNetwork: "testnet",
//     chainConfig: CHAIN_CONFIG,
//   });

//   // const openloginAdapter = new OpenloginAdapter({
//   //   adapterSettings: {
//   //     // clientId: "YOUR-WEB3AUTH-CLIENT-ID", // Optional - Provide only if you haven't provided it in the Web3Auth Instantiation Code
//   //     uxMode: "redirect",
//   //     loginConfig: {
//   //       jwt: {
//   //         name: "g4al-id", // any name
//   //         verifier: "g4al-chain",
//   //         typeOfLogin: "jwt",
//   //         clientId: WEB3AUTH_CLIENT_ID,
//   //       },
//   //     },
//   //   },
//   // });

//   // web3auth.configureAdapter(openloginAdapter);

//   web3auth.init();

//   const gToken =
//     "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJXMjJnQkF0Wk9KT0J6eHhSUzlGNjZ0eGQxQTAzIiwiY2xhaW1zIjp7ImVtYWlsIjoiYWNvbGxzQGc0YWwuY29tIiwid2FsbGV0X2FkZHJlc3MiOm51bGx9LCJpc3MiOiJnZmFsLWlkLWFwaUBnNGFsLWNoYWluLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZ2ZhbC1pZC1hcGlAZzRhbC1jaGFpbi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiZXhwIjoxNjg0MTY1MTg3LCJpYXQiOjE2ODQxNjE1ODd9.PHDlsrCVa5BSUmqqcqKUel4ILqGVmFRbdIfPxgnIL4uNAtMmNx9eV98rjR5oQV47tYhwAkPPrDHsf2NHqXlh-HbvEH5QjjrY4nxnBziBeYBSlCM4fKE4K54Nn2DYKLeOXr8v-q5vZXfvDPuiWi3IUmzIygoMf-YdIZAzUYG_qNS7gBx_s30G2kX52xZkCqblnW8jkibQW0-cNcfjz3KCox8iEF1xL4ULniEKDukTfXhfcwFYMSWUPHg41v0x0-GMTxAjtZc_kI_4zTHzIR2B5zjvD-kM1CmRk_IUNRu5-4XdabX22pvjlpz_gfSmMz5Bg1QB0KreGZz6M8Xq59YtzQ";

//   const jwtToken = parseJwt(gToken);

//   console.log(jwtToken);
//   // const connect = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
//   //   loginProvider: "jwt",
//   //   extraLoginOptions: {
//   //     id_token: gToken,
//   //     verifierIdField: "g4al-chain", // same as your JWT Verifier ID
//   //     domain: "https://YOUR-APPLICATION-DOMAIN" || "http://localhost:8088",
//   //   },
//   // });

//   const loginParams: LoginParams = {
//     verifier: "g4al-chain",
//     verifierId: jwtToken.sub,
//     idToken: gToken,
//   };

//   const connect = await web3auth.connect(loginParams);
//   console.log(connect);

//   console.log(web3auth.provider);

//   // console.log("User info", user);

//   // await web3auth.logout();
// };

// web3authLogin();

// /* END OF SCRIPT */
// /* v1.0 */
// /* Last update: 2023-05-17 */
