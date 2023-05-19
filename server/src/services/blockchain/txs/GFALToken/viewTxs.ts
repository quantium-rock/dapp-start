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

async function getBalanceGFAL(signerAddress: string) {
  let resultHex = await GFAL.balanceOf(signerAddress);
  let resultDec = BigInt(resultHex).toString();
  // return resultDec;
  console.log("getBalanceGFAL result:", resultDec);
}

async function getAllowanceOf(signerAddress: string) {
  let resultHex = await GFAL.allowance(signerAddress, marketplaceAddress);
  let resultDec = BigInt(resultHex).toString();

  // return resultDec;
  console.log("getAllowanceOf result:", resultDec);
}

async function getTotalSupply() {
  let resultHex = await GFAL.totalSupply();
  let resultDec = BigInt(resultHex).toString();
  console.log("getTotalSupply result:", resultDec);
}

async function getDecimals() {
  let result = await GFAL.decimals();
  // return result;
  console.log("getDecimals result:", result);
}

async function getName() {
  let result = await GFAL.name();
  // return result;
  console.log("getName result: ", result);
}

async function getSymbol() {
  let result = await GFAL.symbol();
  // return result;
  console.log("getSymbol result:", result);
}

// RUN TIME TESTING
getBalanceGFAL("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
getAllowanceOf("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
getDecimals();
getTotalSupply();
getName();
getSymbol();

export {
  getAllowanceOf,
  getBalanceGFAL,
  getDecimals,
  getTotalSupply,
  getName,
  getSymbol,
};
