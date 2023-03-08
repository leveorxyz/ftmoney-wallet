import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const API_KEY = process.env.API_KEY;
const API_TOKEN = process.env.API_TOKEN;

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    mainnet: {
      url: `https://rpcapi.fantom.network`,
      chainId: 250,
      accounts: 
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    testnet: {
      url: `https://ftm.getblock.io/${API_TOKEN}/testnet/`,
      chainId: 4002,
      accounts: 
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    coverage: {
      url: 'http://localhost:8555'
    },
    localhost: {
      url: `http://127.0.0.1:8545`
    }
  },
  etherscan: {
    apiKey: {
      ftmTestnet: API_KEY,
      opera: API_KEY
    }
  }
};

export default config;
