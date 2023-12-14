require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ganache");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };

require("dotenv").config();
//** @type import('hardhat/config').HardhatUserConfig */

// const GOERLI_URL = process.env.GOERLI_URL;
const GANACHE_URL = process.env.GANACHE_URL;
const PRIVATE_KEY = process.env.GANACHE_ACC_PRIVATE_KEY;
const CHAIN_ID = process.env.CHAIN_ID;

module.exports = {
  solidity: "0.8.19",
  // Incase we want to deploy on goerli test network
  // networks: {
  //   goerli: {
  //     url: GOERLI_URL,
  //     accounts: [PRIVATE_KEY],
  //   },
  // },
  networks: {
    // hardhat: {
    //   chainId: CHAIN_ID,
    // },
    ganache: {
      url: GANACHE_URL,
      accounts: [PRIVATE_KEY],
    }

  },
};