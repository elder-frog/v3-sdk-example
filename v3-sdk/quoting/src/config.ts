import { Token } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import { USDT_TOKEN, ZOOA_TOKEN } from "./libs/constants";

// Inputs that configure this example to run
export interface ExampleConfig {
  rpc: {
    local: string;
    mainnet: string;
  };
  tokens: {
    in: Token;
    amountIn: number;
    out: Token;
    poolFee: number;
  };
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  rpc: {
    local: "",
    mainnet: "https://mainnet.infura.io/v3/ccf0630254a74d5d9bd148b2681eca24"
  },
  tokens: {
    in: USDT_TOKEN,
    amountIn: 1000,
    out: ZOOA_TOKEN,
    poolFee: FeeAmount.MEDIUM
  }
};
