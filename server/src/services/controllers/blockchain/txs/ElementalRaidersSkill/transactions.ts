import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../libs/contract";

dotenv.config();

class ERSkillTransactions {
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

  async mintNFT(publicKey: string, rarity: number): Promise<boolean> {
    try {
      await this.SKILL_SC.connect(this.AdminSigner).safeMint(publicKey, rarity);
      return true;
    } catch (e) {
      return false;
    }
  }

  async setApprovalForAll(privateKey: string): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.SKILL_SC.connect(signer).setApprovalForAll(
        this.MARKETPLACE_ADDRESS,
        true
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  async transferFrom(
    privateKey: string,
    receiverAddress: string,
    tokenId: number
  ): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.SKILL_SC.connect(signer).transferFrom(
        signer.address,
        receiverAddress,
        tokenId
      );
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default ERSkillTransactions;
