import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../libs/contract";

dotenv.config();

class ERSkillQueries {
  private SKILL_ADDRESS: string;
  private MARKETPLACE_ADDRESS: string;
  private provider: ethers.providers.JsonRpcProvider;
  private SKILL_SC: ethers.Contract;

  constructor() {
    this.SKILL_ADDRESS = process.env.SKILL_ADDRESS!;
    this.MARKETPLACE_ADDRESS = process.env.MARKETPLACE_ADDRESS!;
    this.provider = new ethers.providers.JsonRpcProvider(
      process.env.PROVIDER_TESTNET_HTTPS!
    );
    this.SKILL_SC = new ethers.Contract(
      this.SKILL_ADDRESS,
      Contract.getABI("ElementalRaidersSkill"),
      this.provider
    );
  }

  async getPrice(rarity: number): Promise<string> {
    let resultHex = await this.SKILL_SC.prices(rarity);
    let resultDec: string = BigInt(resultHex).toString();
    return resultDec;
  }

  //   // todo!
  //   async getOwnerByTokens(tokensId: number[]): Promise<void> {
  //     let resultHex = await this.SKILL_SC.getOwnersByTokens(tokensId);
  //     console.log("ERSkillGetOwnerByTokens result:", resultHex);
  //     // return;
  //   }

  async getMintingPricesByRarity(raritiesId: number[]): Promise<string[]> {
    let result = await this.SKILL_SC.getMintingPricesByRarity(raritiesId);
    let resultDec: string[] = [];
    for (let i = 0; i < result.length; i++) {
      resultDec.push(BigInt(result[i]).toString());
    }
    return resultDec;
  }

  async getBalanceOf(signerAddress: string): Promise<string> {
    let resultHex = await this.SKILL_SC.balanceOf(signerAddress);
    let resultDec: string = BigInt(resultHex).toString();
    return resultDec;
  }

  async ownerOf(tokenId: number): Promise<string> {
    let result = await this.SKILL_SC.ownerOf(tokenId);
    return result;
  }

  async isApprovedForAll(signerAddress: string): Promise<boolean> {
    let result = await this.SKILL_SC.isApprovedForAll(
      signerAddress,
      this.MARKETPLACE_ADDRESS
    );
    return result;
  }

  async getNFTs(publicKey: string): Promise<string[]> {
    try {
      let result: string[] = [];
      let balance = await this.SKILL_SC.balanceOf(publicKey);
      for (let i = 0; i < balance; i++) {
        let query = await this.SKILL_SC.tokenOfOwnerByIndex(publicKey, i);
        result.push(BigInt(query).toString());
      }
      return result;
    } catch (e) {
      throw e;
    }
  }
}

export default ERSkillQueries;
