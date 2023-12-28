import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { computePoolAddress } from "@uniswap/v3-sdk";
import { ethers } from "ethers";

import { CurrentConfig } from "../src/config";
import { POOL_FACTORY_CONTRACT_ADDRESS } from "../src/libs/constants";
import { getProvider } from "../src/libs/providers";

const currentPoolAddress = computePoolAddress({
  factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
  tokenA: CurrentConfig.tokens.in,
  tokenB: CurrentConfig.tokens.out,
  fee: CurrentConfig.tokens.poolFee
});

const poolContract = new ethers.Contract(
  currentPoolAddress,
  IUniswapV3PoolABI.abi,
  getProvider()
);

poolContract
  .getPool(
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "0xC256F81d35a54c3599B424171d719E9Ae87b2E9b",
    3000
  )
  .then(console.log);
