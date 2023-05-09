import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { WalletConnectV1Adapter } from "@web3auth/wallet-connect-v1-adapter";
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";
import { CHAIN_CONFIG } from "@/config";
import { UserAuthInfo } from "@web3auth/base";
// import RPC from "./web3RPC";
// Plugins
// import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";
// Adaptersd="app" class="main">
// import { MetamaskAdapter } from "@web3auth/metamask-adapter";
// import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";

export class Web3AuthAPI {
  loggedIn: boolean;
  web3auth: Web3Auth;
  clientId: string;
  web3authAdapter: WalletConnectV1Adapter;
  web3authOptions: Web3AuthOptions;
  print: boolean;

  constructor(clientId: string, net = "testnet", lang = "en", print = true) {
    // super(web3authOptions);
    this.web3authOptions = {
      clientId,
      chainConfig: CHAIN_CONFIG,
      uiConfig: {
        defaultLanguage: lang,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      web3AuthNetwork: net as any,
    };
    this.loggedIn = false;
    this.web3auth = new Web3Auth(this.web3authOptions);
    this.clientId = clientId;
    this.print = print;
    const url = "https://bridge.walletconnect.org";
    this.web3authAdapter = new WalletConnectV1Adapter({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      adapterSettings: { bridge: url } as any,
      clientId,
    });
    this.web3auth.configureAdapter(this.web3authAdapter);
    // this.initAPI();
  }

  private adapters = {
    torusAdapter: (): TorusWalletConnectorPlugin => {
      return new TorusWalletConnectorPlugin({
        torusWalletOpts: {},
        walletInitOptions: {
          whiteLabel: {
            theme: { isDark: true, colors: { primary: "#000" } },
            logoDark: "@/assets/logos/logo.png",
            logoLight: "@/assets/logos/logo.png",
          },
          useWalletConnect: true,
          enableLogging: true,
        },
      });
    },
    torusInit: async (clientId: string): Promise<boolean> => {
      await this.web3auth.addPlugin(this.adapters.torusAdapter());
      const torusWalletAdapter = new TorusWalletAdapter({
        clientId,
      });
      this.web3auth.configureAdapter(torusWalletAdapter);
      return true;
    },
  };

  initAPI = async (): Promise<boolean> => {
    try {
      await this.web3auth.initModal();
      if (await this.adapters.torusInit(this.clientId)) {
        if (this.print) console.log("Torus Init Success");
      } else {
        if (this.print) console.log("Torus Init Failed");
      }
      if (this.web3auth.provider) {
        console.log("Provider: ", this.web3auth.provider);
        // this.provider = this.web3auth.provider;
        this.loggedIn = true;
      }
      return true;
    } catch (err) {
      if (this.print) console.log("Web3Auth init error", err);
      return false;
    } finally {
      this.loggedIn = false;
    }
  };

  loginUser = async (): Promise<string> => {
    if (!this.web3auth) {
      console.log("web3auth not initialized yet");
    }
    try {
      this.web3auth.provider = await this.web3auth.connect();
    } catch (err) {
      console.log("loginUser error: ", err);
    } finally {
      this.loggedIn = true;
      if (this.print) console.log("Logged in Successfully!");
    }
    return this.userAuth();
  };

  userAuth = async (): Promise<string> => {
    const userToken = await this.web3auth.authenticateUser();
    if (this.print) console.log("User Token: ", userToken);
    return userToken.idToken;
  };
}

// const torusPlugin = new TorusWalletConnectorPlugin({
//   torusWalletOpts: {},
//   walletInitOptions: {
//     whiteLabel: {
//       theme: { isDark: true, colors: { primary: "#000" } },
//       logoDark: "../assets/logo.png",
//       logoLight: "../assets/logo.png",
//     },
//     useWalletConnect: true,
//     enableLogging: true,
//   },
// });
// const walletConnectV1Adapter = new WalletConnectV1Adapter({
//   adapterSettings: {
//     bridge: "https://bridge.walletconnect.org",
//   },
//   clientId,
// });
// this.web3auth.configureAdapter(walletConnectV1Adapter);
// // adding metamask adapter
// const metamaskAdapter = new MetamaskAdapter({
//   clientId,
//   sessionTime: 3600, // 1 hour in seconds
//   web3AuthNetwork: "testnet",
//   chainConfig: CHAIN_CONFIG,
// });
// // we can change the above settings using this function
// metamaskAdapter.setAdapterSettings({
//   sessionTime: 86400, // 1 day in seconds
//   chainConfig: CHAIN_CONFIG,
//   web3AuthNetwork: "testnet",
// });
// // it will add/update  the metamask adapter in to web3auth class
// web3auth.configureAdapter(metamaskAdapter);
// const torusWalletAdapter = new TorusWalletAdapter({
//   clientId,
// });
// // it will add/update  the torus-evm adapter in to web3auth class
// web3auth.configureAdapter(torusWalletAdapter);
// onMounted(async () => {
//   try {
//     loading.value = true;
//     loggedin.value = false;
//     await web3auth.initModal();
//     await web3auth.addPlugin(torusPlugin);
//     if (web3auth.provider) {
//       provider = web3auth.provider;
//       loggedin.value = true;
//     }
//   } catch (error) {
//     uiConsole("error", error);
//   } finally {
//     loading.value = false;
//   }
// });
// const login = async () => {
//   if (!web3auth) {
//     uiConsole("web3auth not initialized yet");
//     return;
//   }
//   provider = await web3auth.connect();
//   loggedin.value = true;
//   uiConsole("Logged in Successfully!");
// };
// const authenticateUser = async () => {
//   if (!web3auth) {
//     uiConsole("web3auth not initialized yet");
//     return;
//   }
//   const idToken = await web3auth.authenticateUser();
//   uiConsole(idToken);
// };
// const getUserInfo = async () => {
//   if (!web3auth) {
//     uiConsole("web3auth not initialized yet");
//     return;
//   }
//   const user = await web3auth.getUserInfo();
//   uiConsole(user);
// };
