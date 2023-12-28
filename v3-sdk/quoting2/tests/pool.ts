import UniswapV3Factory from "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json";
import { ethers } from "ethers";

import { POOL_FACTORY_CONTRACT_ADDRESS } from "../src/libs/constants";
import { getProvider } from "../src/libs/providers";

const provider = getProvider();

const factoryContract = new ethers.Contract(
  POOL_FACTORY_CONTRACT_ADDRESS,
  UniswapV3Factory.abi,
  // define your provider
  provider
);

factoryContract
  .getPool(
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "0xC256F81d35a54c3599B424171d719E9Ae87b2E9b",
    300
  )
  .then(console.log);
