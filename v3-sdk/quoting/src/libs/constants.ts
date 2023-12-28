// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SupportedChainId, Token } from "@uniswap/sdk-core";

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

// Currencies and Tokens

export const USDT_TOKEN = new Token(
  SupportedChainId.MAINNET,
  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  6,
  "USDT",
  "USDT"
);

export const ZOOA_TOKEN = new Token(
  SupportedChainId.MAINNET,
  "0xC256F81d35a54c3599B424171d719E9Ae87b2E9b",
  18,
  "ZOOA",
  "ZOOA"
);
