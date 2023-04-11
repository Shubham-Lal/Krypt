require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.HTTPS_URL,
      accounts: [process.env.ACCOUNT_KEY]
    }
  }
}