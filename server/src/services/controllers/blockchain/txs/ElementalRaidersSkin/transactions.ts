import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../libs/contract";

dotenv.config();

class ElementalRaidersSkin {
  private SKIN_ADDRESS: string;
  private MARKETPLACE_ADDRESS: string;
  private provider: ethers.providers.JsonRpcProvider;
  private AdminSigner: ethers.Wallet;
  private SKIN_SC: ethers.Contract;

  constructor() {
    this.SKIN_ADDRESS = process.env.SKIN_ADDRESS!;
    this.MARKETPLACE_ADDRESS = process.env.MARKETPLACE_ADDRESS!;
    this.provider = new ethers.providers.JsonRpcProvider(
      process.env.PROVIDER_TESTNET_HTTPS!
    );
    this.AdminSigner = new ethers.Wallet(
      process.env.ADMIN_PRIVATE_KEY!,
      this.provider
    );
    this.SKIN_SC = new ethers.Contract(
      this.SKIN_ADDRESS,
      Contract.getABI("ElementalRaidersSkin"),
      this.provider
    );
  }

  async getPrice(rarity: number): Promise<void> {
    let resultHex = await this.SKIN_SC.prices(rarity);
    let resultDec = BigInt(resultHex).toString();
    console.log("ERSkinGetPrice result:", resultDec);
  }

  async getOwnerByTokens(tokensId: number[]): Promise<void> {
    let resultHex = await this.SKIN_SC.getOwnersByTokens(tokensId);
    console.log("ERSkinGetOwnerByTokens result:", resultHex);
  }

  async getMintingPricesByRarity(raritiesId: number[]): Promise<void> {
    let result = await this.SKIN_SC.getMintingPricesByRarity(raritiesId);
    let resultDec: string[] = [];
    for (let i = 0; i < result.length; i++) {
      resultDec.push(BigInt(result[i]).toString());
    }
    console.log("ERSkinGetMintingPricesByRarity:", resultDec);
  }

  async getBalanceOf(signerAddress: string): Promise<void> {
    let resultHex = await this.SKIN_SC.balanceOf(signerAddress);
    let resultDec = BigInt(resultHex).toString();
    console.log("ERSkinGetBalanceOf result:", resultDec);
  }

  async ownerOf(tokenId: number): Promise<void> {
    let result = await this.SKIN_SC.ownerOf(tokenId);
    console.log("ERSkinOwnerOf result:", result);
  }

  async isApprovedForAll(signerAddress: string): Promise<void> {
    let resultHex = await this.SKIN_SC.isApprovedForAll(
      signerAddress,
      this.MARKETPLACE_ADDRESS
    );
    console.log("ERSkinIsApprovedForAll result:", resultHex);
  }

  async transferFrom(
    privateKey: string,
    receiverAddress: string,
    tokenId: number
  ): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.SKIN_SC.connect(signer).transferFrom(
        signer.address,
        receiverAddress,
        tokenId
      );
    } catch (e) {
      throw e;
    }
  }

  async mintNFT(publicKey: string, rarity: number): Promise<void> {
    try {
      await this.SKIN_SC.connect(this.AdminSigner).safeMint(publicKey, rarity);
    } catch (e) {
      throw e;
    }
  }

  async setApprovalForAll(privateKey: string): Promise<void> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.SKIN_SC.connect(signer).setApprovalForAll(
        this.MARKETPLACE_ADDRESS,
        true
      );
    } catch (e) {
      throw e;
    }
  }
}

export default ElementalRaidersSkin;
