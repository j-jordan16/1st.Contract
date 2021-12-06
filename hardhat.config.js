/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// loads all the information in the .env file into the dev environment
require('dotenv').config();
// plugin ethers to help write the deploy script
require("@nomiclabs/hardhat-ethers");
// plug in for etherscan
require("@nomiclabs/hardhat-etherscan");


// being loaded into variables we can used without showing
// what the values are
const { API_URL, PRIVATE_KEY} = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
  // api key of alchemy
  // wallet password
}
