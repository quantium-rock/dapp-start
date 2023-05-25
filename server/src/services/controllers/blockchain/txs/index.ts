// import GFALToken from "./GFALToken/transactions";
// import ElementalRaidersSkill from "./ElementalRaidersSkill/transactions";
// import ElementalRaidersSkin from "./ElementalRaidersSkin/transactions";
// import MarketPlace from "./MarketPlace/transactions";
// import { ethers } from "ethers";

// const publicKeyOwner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
// const privateKeyOwner = process.env.OWNER_PRIVATE_KEY!;
// const publicKeyAdmin = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
// const privateKeyAdmin = process.env.ADMIN_PRIVATE_KEY!;
// const publicKeyUser = "0x90F79bf6EB2c4f870365E785982E1f101E93b906";
// const privateKeyUser = process.env.USER_PRIVATE_KEY!;
// const publicKeyUser2 = "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65";
// const privateKeyUser2 = process.env.USER2_PRIVATE_KEY!;
// const skinAddress = process.env.SKIN_ADDRESS!;
// const skillAddress = process.env.SKILL_ADDRESS!;

// // Runtime tests ✅ working all functions
// const gfal = new GFALToken();
// gfal.getBalance("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
// gfal.getAllowanceOf("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
// gfal.getDecimals();
// gfal.getTotalSupply();
// gfal.getName();
// gfal.getSymbol();
// Needs PrivateKey
// gfal.approve(privateKeyOwner, ethers.utils.parseUnits("1000000", "ether"));
// gfal.transfer(
//   privateKeyOwner,
//   publicKeyUser2,
//   ethers.utils.parseUnits("100", "ether")
// );
// gfal.decreaseAllowance(
//   privateKeyUser,
//   ethers.utils.parseUnits("10", "ether")
// );

// Runtime tests ✅ working all functions
// const skill = new ElementalRaidersSkill();
// skill.getPrice(1);
// skill.getOwnerByTokens([3, 4, 5]);
// skill.getMintingPricesByRarity([0, 1, 2]);
// skill.getBalanceOf("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
// skill.ownerOf(11);
// skill.isApprovedForAll("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
// skill.mintNFT(publicKeyUser, 0);
// // Needs PrivateKey
// skill.setApprovalForAll(privateKeyOwner);
// skill.transferFrom(privateKeyUser, publicKeyUser2, 11);

// Runtime tests ✅ working all functions
// const skin = new ElementalRaidersSkin();
// skin.getPrice(1);
// skin.getOwnerByTokens([3, 4, 5]);
// skin.getMintingPricesByRarity([0, 1, 2]);
// skin.getBalanceOf("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
// skin.ownerOf(0);
// skin.isApprovedForAll("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
// // Needs PrivateKey
// skin.setApprovalForAll(privateKeyUser);
// skin.transferFrom(privateKeyUser, publicKeyUser2, 10);

// Runtime tests ✅ working all functions
// const marketplace = new MarketPlace();
// marketplace.getAllTimeVolume();
// marketplace.getSellersList();
// marketplace.getRoyaltiesInBasisPoints();
// marketplace.getMarketplaceStatus();
// // Needs PrivateKey
// marketplace.sellNFTs(
//   privateKeyOwner,
//   skillAddress,
//   11,
//   1,
//   ethers.utils.parseUnits("10", "ether"),
//   false
// );
// marketplace.buyNFTs(privateKeyOwner, skillAddress, 11, publicKeyUser2);
// marketplace.delistToken(privateKeyOwner, skillAddress, 11);
// marketplace.updatePrice(
//   privateKeyOwner,
//   skillAddress,
//   11,
//   ethers.utils.parseUnits("20", "ether"),
//   true
// );

// todo! Missing test for Vial
