require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;

console.log(PRIVATE_KEY, "CHECK PRIVATE KEY")
const RPC_URL = "https://ethereum-holesky.publicnode.com";
module.exports = {
  defaultNetwork: "holesky",
  networks: {
    hardhat: {
      chainId: 17000,
    },
    holesky: {
      url: RPC_URL,
      accounts: [`${PRIVATE_KEY}`]
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
