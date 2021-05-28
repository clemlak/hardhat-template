import {
  HardhatUserConfig,
} from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import * as dotenv from 'dotenv';
import 'hardhat-typechain';
import '@nomiclabs/hardhat-etherscan';

dotenv.config();

const {
  RINKEBY_ALCHEMY_KEY,
  PRIVATE_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
  mocha: {
    timeout: '30s',
  },
};

export default config;
