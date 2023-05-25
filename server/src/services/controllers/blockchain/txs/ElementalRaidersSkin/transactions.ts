import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../libs/contract";

dotenv.config();

class ERSkinTransactions {
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
      Contract.getABI("ElementalRaidersSKIN"),
      this.provider
    );
  }

  async mintNFT(publicKey: string, rarity: number): Promise<boolean> {
    try {
      await this.SKIN_SC.connect(this.AdminSigner).safeMint(publicKey, rarity);
      return true;
    } catch (e) {
      return false;
    }
  }

  async setApprovalForAll(privateKey: string): Promise<boolean> {
    try {
      let signer = new ethers.Wallet(privateKey, this.provider);
      await this.SKIN_SC.connect(signer).setApprovalForAll(
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
      await this.SKIN_SC.connect(signer).transferFrom(
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

export default ERSkinTransactions;
