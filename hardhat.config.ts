import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";

import accounts from "./secrets/.accounts";
import priv_rpc from "./secrets/.priv_rpc";

const config: HardhatUserConfig = {
  namedAccounts: {
    deployer: { default: 0 },
    funder: { default: 1 },
  },
  networks: {
    ethereum: {
      chainId: 1,
      url: priv_rpc.ethereum_rpc,
      accounts: [...accounts],
      tags: ["no"],
    },
    polygon: {
      chainId: 137,
      url: "https://polygon-rpc.com",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    arbitrumone: {
      chainId: 42161,
      url: "https://rpc.ankr.com/arbitrum",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    arbitrumnova: {
      chainId: 42170,
      url: "https://nova.arbitrum.io/rpc",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    fantom: {
      chainId: 250,
      url: "https://rpcapi.fantom.network",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    klaytn: {
      chainId: 8217,
      url: "https://klaytn04.fandom.finance",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    aurora: {
      chainId: 1313161554,
      url: "https://mainnet.aurora.dev",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    heco: {
      chainId: 128,
      url: "https://http-mainnet.hecochain.com",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    moonbeam: {
      chainId: 1284,
      url: "https://rpc.api.moonbeam.network",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    moonriver: {
      chainId: 1285,
      url: "https://rpc.api.moonriver.moonbeam.network",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    kcc: {
      chainId: 321,
      url: "https://rpc-mainnet.kcc.network",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    astar: {
      chainId: 592,
      url: "https://astar.public.blastapi.io",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    iotex: {
      chainId: 4689,
      url: "https://rpc.ankr.com/iotex",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    wanchain: {
      chainId: 888,
      url: "https://gwan-ssl.wandevs.org:56891",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    dogechain: {
      chainId: 2000,
      url: "https://rpc01-sg.dogechain.dog",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    thundercore: {
      chainId: 108,
      url: "https://mainnet-rpc.thundercore.io",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    boba: {
      chainId: 288,
      url: "https://mainnet.boba.network",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    syscoin: {
      chainId: 57,
      url: "wss://rpc.syscoin.org/wss",
      accounts: [...accounts],
      tags: [],
    },
    tomo: {
      chainId: 88,
      url: "https://rpc.tomochain.com",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    bsc: {
      chainId: 56,
      url: "https://bsc-dataseed.binance.org",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    avalanche: {
      chainId: 43114,
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    optimism: {
      chainId: 10,
      url: "https://mainnet.optimism.io",
      accounts: [...accounts],
      tags: ["deploy"],
      companionNetworks: {
        l1: "ethereum",
      },
    },
    cronos: {
      chainId: 25,
      url: "https://evm.cronos.org",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    kava: {
      chainId: 2222,
      url: "https://evm.kava.io",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    gnosis: {
      chainId: 100,
      url: "https://rpc.gnosischain.com",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    fusion: {
      chainId: 32659,
      url: "https://mainnet.anyswap.exchange",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    celo: {
      chainId: 42220,
      url: "https://forno.celo.org",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    metis: {
      chainId: 1088,
      url: "https://andromeda.metis.io/?owner=1088",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    telos: {
      chainId: 40,
      url: "https://rpc1.us.telos.net/evm",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    harmony: {
      chainId: 1666600000,
      url: "https://a.api.s0.t.hmny.io",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    oasis: {
      chainId: 42262,
      url: "https://emerald.oasis.dev",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    theta: {
      chainId: 361,
      url: "https://eth-rpc-api.thetatoken.org/rpc",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    okx: {
      chainId: 66,
      url: "https://exchainrpc.okex.org",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    ultron: {
      chainId: 1231,
      url: "https://ultron-rpc.net",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    velas: {
      chainId: 106,
      url: "https://evmexplorer.velas.com/rpc",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    elastos: {
      chainId: 20,
      url: "https://api.elastos.io/esc",
      accounts: [...accounts],
      tags: ["deploy"],
    },
    evmos: {
      chainId: 9001,
      url: "https://eth.bd.evmos.org:8545",
      accounts: [...accounts],
      tags: ["deploy"],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
