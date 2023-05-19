import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../lib/Contract";

dotenv.config();

const marketplaceAddress = process.env.MARKETPLACE_ADDRESS!;
const ElementalRaidersSkill = process.env.SKILL_ADDRESS!;

const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER_TESTNET_HTTPS!
);

const AdminSigner = new ethers.Wallet(process.env.ADMIN_PRIVATE_KEY!, provider);
const SKILL_SC = new ethers.Contract(
  ElementalRaidersSkill,
  Contract.getABI("ElementalRaidersSkill"),
  provider
);

// Minting function for sending it to the user. publicKey is where it will be sent.
// For internal minting use Rarity as 0.
// TODO! Check that the user has already approved the manage of tokens.
async function ERSkillMintNFT(publicKey: string, rarity: number) {
  try {
    await SKILL_SC.connect(AdminSigner).safeMint(publicKey, rarity);
  } catch (e) {
    throw e;
  }
}

async function ERSkillSetApprovalForAll(privateKey: string) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await SKILL_SC.connect(signer).setApprovalForAll(
      signer.address,
      marketplaceAddress
    );
  } catch (e) {
    throw e;
  }
}

async function ERSkillTransferFrom(
  privateKey: string,
  receiverAddress: string,
  tokenId: number
) {
  try {
    let signer = new ethers.Wallet(privateKey, provider);
    await SKILL_SC.connect(signer).transferFrom(
      signer.address,
      receiverAddress,
      tokenId
    );
  } catch (e) {
    throw e;
  }
}

export { ERSkillMintNFT, ERSkillSetApprovalForAll, ERSkillTransferFrom };
