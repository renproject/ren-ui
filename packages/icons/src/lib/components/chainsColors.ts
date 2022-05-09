import { Asset, Chain } from "@renproject/chains";
import { assetsColors, BaseColor } from "./assetsColors";

export type ChainColorArray = Array<string>;

export type ChainColor = BaseColor & {
  colorArray: ChainColorArray;
};

export const create521Colors = (primary: string, secondary = "") => {
  return [
    primary,
    primary,
    primary,
    primary,
    primary,
    secondary,
    secondary,
    primary,
  ] as ChainColorArray;
};

export const create125Colors = (primary: string, secondary = "") => {
  return create521Colors(primary, secondary).reverse() as ChainColorArray;
};

const solanaColorArray = [
  "#ca32f8",
  "#ca32f8",
  "#ca32f8",
  "#c439f6",
  "#af4eec",
  "#9469e1",
  "#7788d5",
  "#58a6c8",
  "#1de2af",
  "#1de2af",
  "#1de2af",
  "#2bd3b5",
  "#44bbbf",
  "#5ea0cb",
  "#7c81d7",
  "#9a63e3",
];

const createChainColors = (primary: string, colorArray?: ChainColorArray) => {
  return {
    primary: primary,
    colorArray,
  } as ChainColor;
};

const createChainColorsFromAsset = (asset: Asset | string) => {
  const { primary } = assetsColors[asset as Asset];
  return createChainColors(primary, [primary]);
};

// using "BTC" instead of Asset.BTC prevents importing chains to build
// while keeping proper typecheck
export const chainsColors: Record<Chain, ChainColor> = {
  Arbitrum: createChainColors("#2D374B", ["#28a0f0", "#2D374B"]),
  Avalanche: createChainColors("#E84142", create521Colors("#E84142")),
  BinanceSmartChain: createChainColors("#272C33", create521Colors("#F3BA2F")),
  Bitcoin: createChainColorsFromAsset("BTC"),
  BitcoinCash: createChainColorsFromAsset("BCH"),
  DigiByte: createChainColorsFromAsset("DGB"),
  Dogecoin: createChainColorsFromAsset("DOGE"),
  Ethereum: createChainColors("#627EEA", create521Colors("#627EEA")),
  Fantom: createChainColors("#1969ff", create125Colors("#1969ff")),
  Filecoin: createChainColorsFromAsset("FIL"),
  Goerli: createChainColors("#627EEA", create521Colors("#627EEA")),
  Polygon: createChainColors("#8247E5", create521Colors("#8247E5")),
  Solana: createChainColors("#272C33", solanaColorArray),
  Terra: createChainColorsFromAsset("LUNA"),
  Zcash: createChainColorsFromAsset("ZEC"),
};
