import { Token } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import { USDT_TOKEN, WETH_TOKEN, ZOOA_TOKEN } from "./libs/constants";

// Inputs that configure this example to run
export interface ExampleConfig {
  rpc: {
    mainnet: string;
  };
  tokens: {
    in: Token;
    out: Token;
    poolFee: number;
  };
}

// Example Configuration
USDT_TOKEN;

export const CurrentConfig: ExampleConfig = {
  rpc: {
    mainnet: "https://mainnet.infura.io/v3/ccf0630254a74d5d9bd148b2681eca24"
  },
  tokens: {
    in: WETH_TOKEN,
    out: ZOOA_TOKEN,
    poolFee: FeeAmount.HIGH
  }
};
