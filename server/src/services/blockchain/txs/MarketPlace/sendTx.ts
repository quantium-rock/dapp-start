import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../lib/Contract";

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER_TESTNET_HTTPS!
);
const MarketPlace = new ethers.Contract(
  process.env.MARKETPLACE_ADDRESS!,
  Contract.getABI("MarketPlace"),
  provider
);

async function sellNFTs(
  privateKey: string,
  contractAddress: string,
  tokenId: number,
  amount: number,
  price: ethers.BigNumberish,
  isDollar: boolean
) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await MarketPlace.connect(signer).sellToken(
      contractAddress,
      tokenId,
      amount,
      price,
      isDollar
    );
  } catch (e) {
    throw e;
  }
}

async function buyNFTs(
  privateKey: string,
  contractAddress: string,
  tokenId: number,
  seller: string
) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await MarketPlace.connect(signer).buyToken(
      contractAddress,
      tokenId,
      seller
    );
  } catch (e) {
    throw e;
  }
}

async function delistToken(
  privateKey: string,
  contractAddress: string,
  tokenId: number
) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await MarketPlace.connect(signer).removeToken(contractAddress, tokenId);
  } catch (e) {
    throw e;
  }
}

async function updatePrice(
  privateKey: string,
  contractAddress: string,
  tokenId: number,
  newPrice: ethers.BigNumberish
) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await MarketPlace.connect(signer).updatePrice(
      contractAddress,
      tokenId,
      newPrice
    );
  } catch (e) {}
}

export { sellNFTs, buyNFTs, delistToken, updatePrice };
