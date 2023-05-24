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

  async getBalance(signerAddress: string): Promise<void> {
    let resultHex = await this.GFAL.balanceOf(signerAddress);
    let resultDec = BigInt(resultHex).toString();
    console.log("getBalanceGFAL result:", resultDec);
  }

  async getAllowanceOf(signerAddress: string): Promise<void> {
    let resultHex = await this.GFAL.allowance(
      signerAddress,
      this.MARKETPLACE_ADDRESS
    );
    let resultDec = BigInt(resultHex).toString();
    console.log("getAllowanceOf result:", resultDec);
  }

  async getTotalSupply(): Promise<void> {
    let resultHex = await this.GFAL.totalSupply();
    let resultDec = BigInt(resultHex).toString();
    console.log("getTotalSupply result:", resultDec);
  }

  async getDecimals(): Promise<void> {
    let result = await this.GFAL.decimals();
    console.log("getDecimals result:", result);
  }

  async getName(): Promise<void> {
    let result = await this.GFAL.name();
    console.log("getName result:", result);
  }

  async getSymbol(): Promise<void> {
    let result = await this.GFAL.symbol();
    console.log("getSymbol result:", result);
  }

  async approve(
    privateKey: string,
    amount: ethers.BigNumberish
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.GFAL.connect(signer).approve(this.MARKETPLACE_ADDRESS, amount);
    } catch (e) {
      throw e;
    }
  }

  async transfer(
    privateKey: string,
    receiver: string,
    amount: ethers.BigNumberish
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.GFAL.connect(signer).transfer(receiver, amount);
    } catch (e) {
      throw e;
    }
  }

  async decreaseAllowance(
    privateKey: string,
    amount: ethers.BigNumberish
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.GFAL.connect(signer).decreaseAllowance(
        this.MARKETPLACE_ADDRESS,
        amount
      );
    } catch (e) {
      throw e;
    }
  }
}

export default GFALToken;
