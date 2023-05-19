const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER_TESTNET_HTTPS
);

module.exports = { provider };
