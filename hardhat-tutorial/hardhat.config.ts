import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();



const API_KEY = process.env.API_KEY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if(!PRIVATE_KEY) throw Error("No private key");


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: API_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
