/* @/services/apis/web3/index.ts */

import axios from "axios";
import { BSCSCAN_API_KEY } from "../../../config/web3.config";

// const collections = ["0x82e251e53c7d3f1cdfa1cae175d7c4d74461e8ea"];
const wallets = ["0xA6086628befd7D894F465507e645A9049CE21Dc9"];

const url = `https://api-testnet.bscscan.com/api?module=account&action=tokentx&address=${wallets[0]}&page=1&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=${BSCSCAN_API_KEY}
`;

async function getUserAssets(url: string) {
  await axios.get(url).then((response) => {
    console.log(response.data);
    console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  });
}

getUserAssets(url);

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
