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

  async getBalance(signerAddress: string): Promise<string> {
    let resultHex = await this.GFAL.balanceOf(signerAddress);
    let resultDec = BigInt(resultHex).toString();
    return resultDec;
  }

  async getAllowanceOf(signerAddress: string): Promise<string> {
    let resultHex = await this.GFAL.allowance(
      signerAddress,
      this.MARKETPLACE_ADDRESS
    );
    let resultDec = BigInt(resultHex).toString();
    return resultDec;
  }

  async getTotalSupply(): Promise<string> {
    let resultHex = await this.GFAL.totalSupply();
    let resultDec = BigInt(resultHex).toString();
    return resultDec;
  }

  async getDecimals(): Promise<string> {
    let result = await this.GFAL.decimals();
    return result;
  }

  async getName(): Promise<string> {
    let result = await this.GFAL.name();
    return result;
  }

  async getSymbol(): Promise<string> {
    let result = await this.GFAL.symbol();
    return result;
  }
}

export default GFALToken;
