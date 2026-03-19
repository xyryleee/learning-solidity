require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      accounts: process.env.PRIVATE_KEY
        ? [
            `${
              process.env.PRIVATE_KEY.startsWith("0x")
                ? process.env.PRIVATE_KEY
                : `0x${process.env.PRIVATE_KEY}`
            }`,
          ]
        : [],
    },
    fuji: {
      url: process.env.AVALANCHE_FUJI_RPC_URL || "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: process.env.PRIVATE_KEY ? [`${process.env.PRIVATE_KEY}`.startsWith("0x") ? process.env.PRIVATE_KEY : `0x${process.env.PRIVATE_KEY}`] : [],
    },
    avalanche: {
      url: process.env.AVALANCHE_MAINNET_RPC_URL || "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: process.env.PRIVATE_KEY ? [`${process.env.PRIVATE_KEY}`.startsWith("0x") ? process.env.PRIVATE_KEY : `0x${process.env.PRIVATE_KEY}`] : [],
    },
  },
  verify: {
    // Uses the plugin's Etherscan-like verification workflow.
    // For Avalanche, we route through Snowtrace via `chainDescriptors`.
    etherscan: {
      apiKey: process.env.SNOWTRACE_API_KEY || "",
    },
  },
  chainDescriptors: {
    // Avalanche Fuji
    43113: {
      name: "fuji",
      blockExplorers: {
        etherscan: {
          name: "Snowtrace Fuji",
          url: "https://testnet.snowscan.xyz/",
          apiUrl: "https://api-testnet.snowtrace.io/api",
        },
      },
    },
    // Avalanche C-Chain (Mainnet)
    43114: {
      name: "avalanche",
      blockExplorers: {
        etherscan: {
          name: "Snowtrace",
          url: "https://snowscan.xyz/",
          apiUrl: "https://api.snowtrace.io/api",
        },
      },
    },
  },
};
