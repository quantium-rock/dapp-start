import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../libs/contract";

dotenv.config();

class MarketPlace {
  private MARKETPLACE_ADDRESS: string;
  private provider: ethers.providers.JsonRpcProvider;
  private MARKETPLACE: ethers.Contract;

  constructor() {
    this.MARKETPLACE_ADDRESS = process.env.MARKETPLACE_ADDRESS!;
    this.provider = new ethers.providers.JsonRpcProvider(
      process.env.PROVIDER_TESTNET_HTTPS!
    );
    this.MARKETPLACE = new ethers.Contract(
      this.MARKETPLACE_ADDRESS,
      Contract.getABI("MarketPlace"),
      this.provider
    );
  }

  async getAllTimeVolume(): Promise<void> {
    let resultHex = await this.MARKETPLACE.volume();
    let resultDec = BigInt(resultHex).toString();
    console.log("getAllTimeVolume result:", resultDec);
  }

  async getRoyaltiesInBasisPoints(): Promise<void> {
    let resultHex = await this.MARKETPLACE.royaltiesInBasisPoints();
    let resultDec = BigInt(resultHex).toString();
    console.log("getRoyaltiesInBasisPoints result:", resultDec);
  }

  async getMarketplaceStatus(): Promise<void> {
    let resultHex = await this.MARKETPLACE.isActive();
    let resultDec = BigInt(resultHex).toString();
    console.log("getMarketplaceStatus result:", resultDec);
  }

  async getSellersList(): Promise<void> {
    let resultHex = await this.MARKETPLACE.getSellersList();
    let resultDec = BigInt(resultHex).toString();
    console.log("getSellersList result:", resultDec);
  }

  async sellNFTs(
    privateKey: string,
    contractAddress: string,
    tokenId: number,
    amount: number,
    price: ethers.BigNumberish,
    isDollar: boolean
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.MARKETPLACE.connect(signer).sellToken(
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

  async buyNFTs(
    privateKey: string,
    contractAddress: string,
    tokenId: number,
    seller: string
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.MARKETPLACE.connect(signer).buyToken(
        contractAddress,
        tokenId,
        seller
      );
    } catch (e) {
      throw e;
    }
  }

  async delistToken(
    privateKey: string,
    contractAddress: string,
    tokenId: number
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.MARKETPLACE.connect(signer).removeToken(
        contractAddress,
        tokenId
      );
    } catch (e) {
      throw e;
    }
  }

  async updatePrice(
    privateKey: string,
    contractAddress: string,
    tokenId: number,
    newPrice: ethers.BigNumberish,
    isDollar: boolean
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.MARKETPLACE.connect(signer).updatePrice(
        contractAddress,
        tokenId,
        newPrice,
        isDollar
      );
    } catch (e) {
      throw e;
    }
  }
}

export default MarketPlace;
