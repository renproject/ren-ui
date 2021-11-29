import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FunctionComponent, ReactNode } from "react";

type ChainType = "empty" | "ethereum" | "binance";

type DynamicTokenIconProps = SVGElement & {
  Icon?: ReactNode;
  chain?: "empty" | "ethereum" | "binance";
  size?: number;
};

const defaultColor = `#B3BDC7`;

const chainMappings: Record<ChainType, any> = {
  empty: [defaultColor],
  ethereum: [
    "#627eea",
    "#627eea",
    "#627eea",
    "#627eea",
    "#627eea",
    "",
    "",
    "#627eea",
  ],
  binance: ["#F3BA2F"],
};

const pathStyles = ({ chain = "empty" }: DynamicTokenIconProps) => {
  const mapping = chainMappings[chain]
    ? chainMappings[chain]
    : chainMappings["empty"];
  console.log(mapping);
  const colorArray = Array.from({ length: 16 }, (_, index) => {
    if (mapping.length === 1) {
      return mapping[0];
    } else if (mapping.length === 8) {
      if (index < 8) {
        return mapping[index];
      } else {
        return mapping[16 - index];
      }
    } else if (mapping.length === 16) {
      return mapping[index];
    } else {
      console.warn(
        "Provide 1, 8 or 16 color params for chain:",
        chain,
        "Provided:",
        mapping.length
      );
    }
  });
  const styles = css`
    ${colorArray.map((color, index) => `.d${++index} { fill: ${color};}`)}
  `;
  console.log(styles.styles);
  return styles;
};

const Wrapper = styled<any>("span")`
  display: inline-flex;
  .lrTop,
  .lrBottom {
    fill: ${defaultColor};
  }
  ${pathStyles};
`;

const Paths = () => (
  <>
    <path
      className="d1"
      fill={defaultColor}
      d="M133.125 18.117L158.27 3.59937C163.604 4.89246 168.807 6.51963 173.856 8.45747L152.562 20.7516C146.271 19.3171 139.775 18.4218 133.125 18.117Z"
    />
    <path
      className="d2"
      fill={defaultColor}
      d="M199.142 21.5722L181.409 31.8106C177.172 29.4531 172.763 27.3675 168.205 25.5773L187.318 14.5425C191.394 16.6775 195.34 19.0257 199.142 21.5722Z"
    />
  </>
);
const LongRays = () => (
  <>
    <path
      className="lrTop"
      fill={defaultColor}
      d="M139.606 0.518786C135.784 0.175408 131.914 0 128.003 0C76.4772 0 32.0622 30.445 11.7656 74.3274L46.2207 54.4347C61.5167 37.4412 82.0333 25.2401 105.245 20.3571L139.606 0.518786Z"
    />
    <path
      className="lrBottom"
      fill={defaultColor}
      d="M136.889 237.646C170.732 234.941 200.257 216.918 218.526 190.513L247.593 173.732C229.185 221.839 182.584 256 128.004 256C121.142 256 114.406 255.46 107.836 254.42L136.889 237.646Z"
    />
  </>
);

export const DynamicTokenIcon: FunctionComponent<DynamicTokenIconProps> = ({
  chain = "ethereum",
  size = 24,
}) => {
  return (
    <Wrapper chain={chain}>
      <svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Paths />
        <LongRays />
      </svg>
    </Wrapper>
  );
};
