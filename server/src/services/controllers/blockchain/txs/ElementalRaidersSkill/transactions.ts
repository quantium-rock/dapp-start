import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../libs/contract";

dotenv.config();

class ElementalRaidersSkill {
  private SKILL_ADDRESS: string;
  private MARKETPLACE_ADDRESS: string;
  private provider: ethers.providers.JsonRpcProvider;
  private AdminSigner: ethers.Wallet;
  private SKILL_SC: ethers.Contract;

  constructor() {
    this.SKILL_ADDRESS = process.env.SKILL_ADDRESS!;
    this.MARKETPLACE_ADDRESS = process.env.MARKETPLACE_ADDRESS!;
    this.provider = new ethers.providers.JsonRpcProvider(
      process.env.PROVIDER_TESTNET_HTTPS!
    );
    this.AdminSigner = new ethers.Wallet(
      process.env.ADMIN_PRIVATE_KEY!,
      this.provider
    );
    this.SKILL_SC = new ethers.Contract(
      this.SKILL_ADDRESS,
      Contract.getABI("ElementalRaidersSkill"),
      this.provider
    );
  }

  async getPrice(rarity: number): Promise<void> {
    let resultHex = await this.SKILL_SC.prices(rarity);
    let resultDec = BigInt(resultHex).toString();
    console.log("ERSkillGetPrice result:", resultDec);
  }

  async getOwnerByTokens(tokensId: number[]): Promise<void> {
    let resultHex = await this.SKILL_SC.getOwnersByTokens(tokensId);
    console.log("ERSkillGetOwnerByTokens result:", resultHex);
  }

  async getMintingPricesByRarity(raritiesId: number[]): Promise<void> {
    let result = await this.SKILL_SC.getMintingPricesByRarity(raritiesId);
    let resultDec: string[] = [];
    for (let i = 0; i < result.length; i++) {
      resultDec.push(BigInt(result[i]).toString());
    }
    console.log("ERSkillGetMintingPricesByRarity:", resultDec);
  }

  async getBalanceOf(signerAddress: string): Promise<void> {
    let resultHex = await this.SKILL_SC.balanceOf(signerAddress);
    let resultDec = BigInt(resultHex).toString();
    console.log("ERSkillGetBalanceOf result:", resultDec);
  }

  async ownerOf(tokenId: number): Promise<void> {
    let result = await this.SKILL_SC.ownerOf(tokenId);
    console.log("ERSkillOwnerOf result:", result);
  }

  async isApprovedForAll(signerAddress: string): Promise<void> {
    let resultHex = await this.SKILL_SC.isApprovedForAll(
      signerAddress,
      this.MARKETPLACE_ADDRESS
    );
    console.log("ERSkillIsApprovedForAll result:", resultHex);
  }

  async mintNFT(publicKey: string, rarity: number): Promise<void> {
    try {
      await this.SKILL_SC.connect(this.AdminSigner).safeMint(publicKey, rarity);
    } catch (e) {
      throw e;
    }
  }

  async setApprovalForAll(privateKey: string): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.SKILL_SC.connect(signer).setApprovalForAll(
        this.MARKETPLACE_ADDRESS,
        true
      );
    } catch (e) {
      throw e;
    }
  }

  async transferFrom(
    privateKey: string,
    receiverAddress: string,
    tokenId: number
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.SKILL_SC.connect(signer).transferFrom(
        signer.address,
        receiverAddress,
        tokenId
      );
    } catch (e) {
      throw e;
    }
  }
}

export default ElementalRaidersSkill;
