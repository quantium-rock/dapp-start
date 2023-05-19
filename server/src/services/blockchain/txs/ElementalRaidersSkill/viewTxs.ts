import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../lib/Contract";

dotenv.config();

const marketplaceAddress = process.env.MARKETPLACE_ADDRESS!;
const ElementalRaidersSkill = process.env.SKILL_ADDRESS!;
const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER_TESTNET_HTTPS!
);
const SKILL_SC = new ethers.Contract(
  ElementalRaidersSkill,
  Contract.getABI("ElementalRaidersSkill"),
  provider
);

async function ERSkillGetPrice(rarity: number) {
  let resultHex = await SKILL_SC.prices(rarity);
  let resultDec = BigInt(resultHex).toString();
  console.log("ERSkillGetPrice result:", resultDec);
}

async function ERSkillGetOwnerByTokens(tokensId: number[]) {
  let resultHex = await SKILL_SC.getOwnersByTokens(tokensId);
  console.log("ERSkillGetOwnerByTokens result:", resultHex);
}

async function ERSkillGetMintingPricesByRarity(raritiesId: number[]) {
  let result = await SKILL_SC.getMintingPricesByRarity(raritiesId);
  let resultDec: string[] = [];
  for (let i = 0; i < result.length; i++) {
    resultDec.push(BigInt(result[i]).toString());
  }
  // return resultDec;
  console.log("ERSkillGetMintingPricesByRarity:", resultDec);
}

async function ERSkillGetBalanceOf(signerAddress: string) {
  let resultHex = await SKILL_SC.balanceOf(signerAddress);
  let resultDec = BigInt(resultHex).toString();
  console.log("ERSkillGetBalanceOf result:", resultDec);
}

async function ERSkillOwnerOf(tokenId: number) {
  let result = await SKILL_SC.ownerOf(tokenId);
  console.log("ERSkillOwnerOf result:", result);
}

async function ERSkillIsApprovedForAll(signerAddress: string) {
  let resultHex = await SKILL_SC.isApprovedForAll(
    signerAddress,
    marketplaceAddress
  );
  console.log("ERSkillIsApprovedForAll result:", resultHex);
}

// / RUNTIME TESTS
ERSkillGetPrice(1);
ERSkillGetOwnerByTokens([3, 4, 5]);
ERSkillGetMintingPricesByRarity([0, 1, 2]);
ERSkillGetBalanceOf("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
ERSkillOwnerOf(0);
ERSkillIsApprovedForAll("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");

export {
  ERSkillGetPrice,
  ERSkillGetOwnerByTokens,
  ERSkillGetMintingPricesByRarity,
  ERSkillGetBalanceOf,
  ERSkillOwnerOf,
  ERSkillIsApprovedForAll,
};
