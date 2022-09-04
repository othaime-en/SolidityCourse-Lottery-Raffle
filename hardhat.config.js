<<<<<<< HEAD
//require("hardhat-contract-sizer")
=======
>>>>>>> c845be50a591ae0b8db53692ba9097d6ba0efed4
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")
require("dotenv").config()
//const MAINNET_RPC_URL =
//  process.env.MAINNET_RPC_URL ||
//process.env.ALCHEMY_MAINNET_RPC_URL ||
//;("https://eth-mainnet.alchemyapi.io/v2/your-api-key")
// const RINKEBY_RPC_URL =
// process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || ""
//const POLYGON_MAINNET_RPC_URL =
//process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"
// optional
//const MNEMONIC = process.env.MNEMONIC || "your mnemonic"
// Your API key for Etherscan, obtain one at https://etherscan.io/
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
//const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key"
//const REPORT_GAS = process.env.REPORT_GAS || false
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    solidity: "0.8.7",
<<<<<<< HEAD
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
=======
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        // goerli: {
        //     url: GOERLI_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 5,
        //     blockConfirmations: 6,
        // },
>>>>>>> c845be50a591ae0b8db53692ba9097d6ba0efed4
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            //Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
<<<<<<< HEAD
        player: {
            default: 1,
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },
    mocha: {
        timeout: 500000, // 500 seconds max for running tests
=======
>>>>>>> c845be50a591ae0b8db53692ba9097d6ba0efed4
    },
}
