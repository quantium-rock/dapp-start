import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../libs/contract";

dotenv.config();

class ERSkinQueries {
  private SKIN_ADDRESS: string;
  private MARKETPLACE_ADDRESS: string;
  private provider: ethers.providers.JsonRpcProvider;
  private SKIN_SC: ethers.Contract;

  constructor() {
    this.SKIN_ADDRESS = process.env.SKIN_ADDRESS!;
    this.MARKETPLACE_ADDRESS = process.env.MARKETPLACE_ADDRESS!;
    this.provider = new ethers.providers.JsonRpcProvider(
      process.env.PROVIDER_TESTNET_HTTPS!
    );

    this.SKIN_SC = new ethers.Contract(
      this.SKIN_ADDRESS,
      Contract.getABI("ElementalRaidersSkin"),
      this.provider
    );
  }

  async getPrice(rarity: number): Promise<string> {
    let resultHex = await this.SKIN_SC.prices(rarity);
    let resultDec: string = BigInt(resultHex).toString();
    return resultDec;
  }

  // // todo!
  // async getOwnerByTokens(tokensId: number[]): Promise<void> {
  //   let resultHex = await this.SKIN_SC.getOwnersByTokens(tokensId);
  //   return;
  //   console.log("ERSkinGetOwnerByTokens result:", resultHex);
  // }

  async getMintingPricesByRarity(raritiesId: number[]): Promise<string[]> {
    let result = await this.SKIN_SC.getMintingPricesByRarity(raritiesId);
    let resultDec: string[] = [];
    for (let i = 0; i < result.length; i++) {
      resultDec.push(BigInt(result[i]).toString());
    }
    return resultDec;
  }

  async getBalanceOf(signerAddress: string): Promise<string> {
    let resultHex = await this.SKIN_SC.balanceOf(signerAddress);
    let resultDec: string = BigInt(resultHex).toString();
    return resultDec;
  }

  async ownerOf(tokenId: number): Promise<string> {
    let result = await this.SKIN_SC.ownerOf(tokenId);
    return result;
  }

  async isApprovedForAll(signerAddress: string): Promise<boolean> {
    let result = await this.SKIN_SC.isApprovedForAll(
      signerAddress,
      this.MARKETPLACE_ADDRESS
    );
    return result;
  }

  async getNFTs(publicKey: string): Promise<string[]> {
    try {
      let result: string[] = [];
      let balance = await this.SKIN_SC.balanceOf(publicKey);
      for (let i = 0; i < balance; i++) {
        let query = await this.SKIN_SC.tokenOfOwnerByIndex(publicKey, i);
        result.push(BigInt(query).toString());
      }
      return result;
    } catch (e) {
      throw e;
    }
  }
}

export default ERSkinQueries;
