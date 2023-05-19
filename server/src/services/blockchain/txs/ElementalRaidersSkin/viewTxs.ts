import dotenv from "dotenv";
import { ethers } from "ethers";
import Contract from "../../lib/Contract";

dotenv.config();

const ElementalRaidersSkin = process.env.SKIN_ADDRESS!;
const marketplaceAddress = process.env.MARKETPLACE_ADDRESS!;

const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER_TESTNET_HTTPS!
);
const SKIN_SC = new ethers.Contract(
  ElementalRaidersSkin,
  Contract.getABI("ElementalRaidersSkin"),
  provider
);

async function ERSkinGetPrice(rarity: number) {
  let resultHex = await SKIN_SC.prices(rarity);
  let resultDec = BigInt(resultHex).toString();
  // return resultDec;
  console.log("ERSkinGetPrice result:", resultDec);
}

async function ERSkinGetOwnerByTokens(tokensId: number[]) {
  let resultHex = await SKIN_SC.getOwnersByTokens(tokensId);

  // return resultHex;
  console.log("ERSkinGetOwnerByTokens result:", resultHex);
}

async function ERSkinGetMintingPricesByRarity(raritiesId: number[]) {
  let result = await SKIN_SC.getMintingPricesByRarity(raritiesId);
  let resultDec: string[] = [];
  for (let i = 0; i < result.length; i++) {
    resultDec.push(BigInt(result[i]).toString());
  }
  // return resultDec;
  console.log("ERSkinGetMintingPricesByRarity:", resultDec);
}

async function ERSkinGetBalanceOf(signerAddress: string) {
  let resultHex = await SKIN_SC.balanceOf(signerAddress);
  let resultDec = BigInt(resultHex).toString();

  // return resultDec;
  console.log("ERSkinGetBalanceOf result:", resultDec);
}

async function ERSkinOwnerOf(tokenId: number) {
  let result = await SKIN_SC.ownerOf(tokenId);
  // return result;
  console.log("ERSkinOwnerOf result:", result);
}

async function ERSkinIsApprovedForAll(signerAddress: string) {
  let resultHex = await SKIN_SC.isApprovedForAll(
    signerAddress,
    marketplaceAddress
  );
  // return resultHex;
  console.log("ERSkinIsApprovedForAll result:", resultHex);
}

// / RUNTIIME TESTS
ERSkinGetPrice(1);
ERSkinGetOwnerByTokens([3, 4, 5]);
ERSkinGetMintingPricesByRarity([0, 1, 2]);
ERSkinGetBalanceOf("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");
ERSkinOwnerOf(0);
ERSkinIsApprovedForAll("0x3C0A582c1321AdBbb64AD60dDBD9a4c8eAd2Bb3D");

export {
  ERSkinGetPrice,
  ERSkinGetOwnerByTokens,
  ERSkinGetMintingPricesByRarity,
  ERSkinGetBalanceOf,
  ERSkinOwnerOf,
  ERSkinIsApprovedForAll,
};
