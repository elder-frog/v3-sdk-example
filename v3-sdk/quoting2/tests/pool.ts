import FACTORY_ABI from "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json";
import { ethers } from "ethers";

import { getProvider } from "../src/libs/providers";

const provider = getProvider();

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

const uniswapV3Factory = new ethers.Contract(
  "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  FACTORY_ABI as any,
  wallet
);

uniswapV3Factory
  .getPool(
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "0xC256F81d35a54c3599B424171d719E9Ae87b2E9b",
    500
  )
  .then(console.log);
