//import "@nomiclabs/hardhat-waffle";
import dotenv from "dotenv";
dotenv.config();

import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";

const config = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API}`,
      accounts: [`${process.env.PRI_KEY}`]
    },
    fantom: {
      url: "https://rpc.testnet.fantom.network/",
      accounts: [`${process.env.PRI_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;