import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../lib/Contract";

dotenv.config();

const marketplaceAddress = process.env.MARKETPLACE_ADDRESS!;
const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER_TESTNET_HTTPS!
);

const GFAL = new ethers.Contract(
  process.env.GFAL_TOKEN_ADDRESS!,
  Contract.getABI("G4ALToken"),
  provider
);

async function approveGFAL(privateKey: string, amount: ethers.BigNumberish) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await GFAL.connect(signer).approve(marketplaceAddress, amount);
  } catch (e) {
    throw e;
  }
}

async function transferGFAL(
  privateKey: string,
  receiver: string,
  amount: ethers.BigNumberish
) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await GFAL.connect(signer).transfer(receiver, amount);
  } catch (e) {
    throw e;
  }
}

async function decreaseAllowanceGFAL(
  privateKey: string,
  spenderPK: string,
  amount: ethers.BigNumberish
) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await GFAL.connect(signer).decreaseAllowance(marketplaceAddress, amount);
  } catch (e) {
    throw e;
  }
}

export { decreaseAllowanceGFAL, transferGFAL, approveGFAL };
