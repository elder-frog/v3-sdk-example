// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SupportedChainId, Token } from "@uniswap/sdk-core";

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  // "0xf20F344c8E21a4D5684C96E4540DD2D7D8F1Fb0f"; // weth -> zooa
  //  "0x4e68Ccd3E89f51C3074ca5072bbAC773960dFa36";
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

// Currencies and Tokens

export const WETH_TOKEN = new Token(
  SupportedChainId.MAINNET,
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  18,
  "WETH",
  "Wrapped Ether"
);

export const USDT_TOKEN = new Token(
  SupportedChainId.MAINNET,
  "0xdac17f958d2ee523a2206206994597c13d831ec7",
  6,
  "USDT",
  "USDT"
);

export const ZOOA_TOKEN = new Token(
  SupportedChainId.MAINNET,
  "0xd1c9cbe7f1975b599b9189ce132a433c4a3c8986",
  18,
  "ZOOA",
  "ZOOA"
);
