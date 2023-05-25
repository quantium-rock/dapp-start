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

  async sellNFTs(
    privateKey: string,
    contractAddress: string,
    tokenId: number,
    amount: number,
    price: ethers.BigNumberish,
    isDollar: boolean
  ): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.MARKETPLACE.connect(signer).sellToken(
        contractAddress,
        tokenId,
        amount,
        price,
        isDollar
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  async buyNFTs(
    privateKey: string,
    contractAddress: string,
    tokenId: number,
    seller: string
  ): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.MARKETPLACE.connect(signer).buyToken(
        contractAddress,
        tokenId,
        seller
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  async delistToken(
    privateKey: string,
    contractAddress: string,
    tokenId: number
  ): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.MARKETPLACE.connect(signer).removeToken(
        contractAddress,
        tokenId
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  async updatePrice(
    privateKey: string,
    contractAddress: string,
    tokenId: number,
    newPrice: ethers.BigNumberish,
    isDollar: boolean
  ): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.MARKETPLACE.connect(signer).updatePrice(
        contractAddress,
        tokenId,
        newPrice,
        isDollar
      );
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default MarketPlace;
