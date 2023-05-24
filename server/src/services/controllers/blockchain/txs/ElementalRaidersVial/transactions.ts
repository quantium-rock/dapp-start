// import dotenv from "dotenv";
// import { ethers } from "ethers";
// import Contract from "../../libs/contract";

// dotenv.config();

class ElementalRaidersVial {
  // private VIAL_ADDRESS: string;
  // private MARKETPLACE_ADDRESS: string;
  // private provider: ethers.providers.JsonRpcProvider;
  // private AdminSigner: ethers.Wallet;
  // private VIAL_SC: ethers.Contract;

  constructor() {
    // this.VIAL_ADDRESS = process.env.VIAL_ADDRESS!;
    // this.MARKETPLACE_ADDRESS = process.env.MARKETPLACE_ADDRESS!;
    // this.provider = new ethers.providers.JsonRpcProvider(
    // process.env.PROVIDER_TESTNET_HTTPS!
    // );
    // this.AdminSigner = new ethers.Wallet(
    // process.env.ADMIN_PRIVATE_KEY!,
    //   this.provider
    // );
    // this.VIAL_SC = new ethers.Contract(
    //   this.VIAL_ADDRESS,
    //   Contract.getABI("ElementalRaidersSkill"),
    //   this.provider
    // );
  }
  // TODO! for V2:  Vial functions
  // balanceOf(address account, uint256 id)
  // async ERVialBalanceOf()
  // balanceOfBatch(address[] memory accounts,    uint256[] memory ids)
  // isApprovedForAll(address account, address operator)

  // setApprovalForAll(address operator, bool approved)
  //  safeTransferFrom( address from, address to, uint256 id, uint256 amount, bytes memory data)
  // safeBatchTransferFrom(address from,address to,uint256[] memory ids,uint256[] memory amounts,bytes memory data)
  // mint(address to, uint256 vialId)
  // burn(uint256 vialId)
  // Transfer
  // async ERVialMintWhitelisted(): Promise<void> {}
}

export default ElementalRaidersVial;
