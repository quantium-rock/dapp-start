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

  async getAllTimeVolume(): Promise<string> {
    let resultHex = await this.MARKETPLACE.volume();
    let resultDec = BigInt(resultHex).toString();
    return resultDec;
  }

  async getRoyaltiesInBasisPoints(): Promise<string> {
    let resultHex = await this.MARKETPLACE.royaltiesInBasisPoints();
    let resultDec = BigInt(resultHex).toString();
    return resultDec;
  }

  async getMarketplaceStatus(): Promise<boolean> {
    let result = await this.MARKETPLACE.isActive();
    return result;
  }

  async getSellersList(): Promise<string[]> {
    let result = await this.MARKETPLACE.getSellersList();
    return result;
  }
}

export default MarketPlace;
