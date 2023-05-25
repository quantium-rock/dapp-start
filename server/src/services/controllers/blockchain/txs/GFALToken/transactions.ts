import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../libs/contract";

dotenv.config();

class GFALToken {
  private MARKETPLACE_ADDRESS: string;
  private provider: ethers.providers.JsonRpcProvider;
  private GFAL: ethers.Contract;

  constructor() {
    this.MARKETPLACE_ADDRESS = process.env.MARKETPLACE_ADDRESS!;
    this.provider = new ethers.providers.JsonRpcProvider(
      process.env.PROVIDER_TESTNET_HTTPS!
    );
    this.GFAL = new ethers.Contract(
      process.env.GFAL_TOKEN_ADDRESS!,
      Contract.getABI("G4ALToken"),
      this.provider
    );
  }

  async approve(
    privateKey: string,
    amount: ethers.BigNumberish
  ): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.GFAL.connect(signer).approve(this.MARKETPLACE_ADDRESS, amount);
      return true;
    } catch (e) {
      return false;
    }
  }

  async transfer(
    privateKey: string,
    receiver: string,
    amount: ethers.BigNumberish
  ): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.GFAL.connect(signer).transfer(receiver, amount);
      return true;
    } catch (e) {
      return false;
    }
  }

  async decreaseAllowance(
    privateKey: string,
    amount: ethers.BigNumberish
  ): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.GFAL.connect(signer).decreaseAllowance(
        this.MARKETPLACE_ADDRESS,
        amount
      );
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default GFALToken;
