import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    ganache: {
      live: false,
      url: "http://localhost:8545",
      accounts: [
        "8a17ff2b9bda5e8f95e8dd481eeb3a0e82c7576d45f7bd028370cf327a6e9ffe",
      ],
    },
    bsc_testnet: {
      live: true,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [
        "9f80d70625b6cae65d3acaa60652cafecc8873f6f4d32620f3b7d8618244ca62",
      ],
    },
    bsc_mainnet: {
      live: false,
      url: "https://bsc-dataseed.binance.org/",
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
