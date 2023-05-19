import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../lib/Contract";

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER_TESTNET_HTTPS!
);
const MARKETPLACE = new ethers.Contract(
  process.env.MARKETPLACE_ADDRESS!,
  Contract.getABI("MarketPlace"),
  provider
);

async function getAllTimeVolume() {
  let resultHex = await MARKETPLACE.volume();
  let resultDec = BigInt(resultHex).toString();
  // return resultDec;
  console.log("getAllTimeVolume result:", resultDec);
}

async function getRoyaltiesInBasisPoints() {
  let resultHex = await MARKETPLACE.royaltiesInBasisPoints();
  let resultDec = BigInt(resultHex).toString();
  // return resultDec;
  console.log("getRoyaltiesInBasisPoints result:", resultDec);
}

async function getMarketplaceStatus() {
  let resultHex = await MARKETPLACE.isActive();
  let resultDec = BigInt(resultHex).toString();
  // return resultDec;
  console.log("getMarketplaceStatus result:", resultDec);
}

async function getSellersList() {
  let resultHex = await MARKETPLACE.getSellersList();
  let resultDec = BigInt(resultHex).toString();
  // return resultDec;
  console.log("getSellersList result:", resultDec);
}

getAllTimeVolume();
getSellersList();
getRoyaltiesInBasisPoints();
getMarketplaceStatus();

export {
  getAllTimeVolume,
  getSellersList,
  getRoyaltiesInBasisPoints,
  getMarketplaceStatus,
};
