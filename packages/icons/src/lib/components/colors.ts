import { Asset, Chain } from "@renproject/chains";

export type BaseColor = {
  primary: string;
};

export type AssetColor = BaseColor;

export type ChainColor = BaseColor;

const defaultColor = "#272C33";

const createColor = (primary = defaultColor) => {
  const color: AssetColor = {
    primary,
  };
  return color;
};

export const assetColors: Record<Asset, AssetColor> = {
  AVAX: createColor("#E84142"),
  ArbETH: createColor("#627EEA"),
  BADGER: createColor("#F1A23F"),
  BCH: createColor("#6CC64B"),
  BNB: createColor("#F3BA2F"),
  BTC: createColor("#F7931A"),
  BUSD: createColor("#F0B90B"),
  CRV: createColor("#272C33"),
  DAI: createColor("#F5AC37"),
  DGB: createColor("#0063CF"),
  DOGE: createColor("#C2A633"),
  ETH: createColor("#627EEA"),
  EURT: createColor("#2D598A"),
  FIL: createColor("#0090FF"),
  FTM: createColor("#1969FF"),
  FTT: createColor("#272C33"),
  KNC: createColor("#31CB98"),
  LINK: createColor("#272C33"),
  LUNA: createColor("#F9D85E"),
  MATIC: createColor("#8247E5"),
  MIM: createColor("#272C33"),
  REN: createColor("#272C33"),
  ROOK: createColor("#272C33"),
  SOL: createColor("#272C33"),
  SUSHI: createColor("#272C33"),
  UNI: createColor("#272C33"),
  USDC: createColor("#2775CA"),
  USDT: createColor("#26A17B"),
  ZEC: createColor("#F3B63B"),
  gETH: createColor("#627EEA"),
};

export const chainColors: Record<Chain, ChainColor | undefined> = {
  Arbitrum: undefined,
  Avalanche: undefined,
  BinanceSmartChain: undefined,
  Bitcoin: undefined,
  BitcoinCash: undefined,
  DigiByte: undefined,
  Dogecoin: undefined,
  Ethereum: undefined,
  Fantom: undefined,
  Filecoin: undefined,
  Goerli: undefined,
  Polygon: undefined,
  Solana: undefined,
  Terra: undefined,
  Zcash: undefined,
};
