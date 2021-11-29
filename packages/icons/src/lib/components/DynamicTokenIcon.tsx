import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FunctionComponent, ReactNode } from "react";

export type ChainType = "none" | "ethereum" | "binance";

export type DynamicTokenIconProps = {
  Icon?: ReactNode;
  chain?: ChainType;
  size?: number;
};

const defaultColor = `#B3BDC7`;

const chainMappings: Record<ChainType, string[]> = {
  none: [defaultColor],
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

const pathStyles = ({ chain = "none" }: DynamicTokenIconProps) => {
  const mapping = chainMappings[chain]
    ? chainMappings[chain]
    : chainMappings["none"];
  console.log(mapping);
  const colorArray = Array.from({ length: 16 }, (_, index) => {
    if (mapping.length === 1) {
      return mapping[0];
    } else if (mapping.length === 8) {
      if (index < 8) {
        return mapping[index];
      } else {
        return mapping[index - 8];
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
      return defaultColor;
    }
  });
  const styles = css`
    ${colorArray.map((color, index) => `.d${++index} { fill: ${color};}`)}
  `;
  console.log(styles.styles);
  return styles;
};

const sizeStyles = ({ size }: DynamicTokenIconProps) => {
  return css`
    width: ${size}px;
  `;
};

const Wrapper = styled<any>("span")`
  display: inline-flex;
  ${sizeStyles};
  .lrTop,
  .lrBottom {
    fill: ${defaultColor};
  }
  .d {
    transition: fill 0.6s ease;
  }
  ${pathStyles};
`;

const Paths = () => (
  <>
    <path
      className="d d16"
      d="M96.3067 233.364L76.0918 245.035C80.8097 247.131 85.6779 248.95 90.6757 250.471L113.842 237.097C107.831 236.324 101.973 235.066 96.3067 233.364Z"
      fill={defaultColor}
    />
    <path
      className="d d15"
      d="M69.4656 221.148L52.1738 231.131C55.7715 233.781 59.5129 236.247 63.3841 238.515L81.8266 227.867C77.5505 225.887 73.4231 223.64 69.4656 221.148Z"
      fill={defaultColor}
    />
    <path
      className="d d14"
      d="M49.4442 204.995L33.4219 214.246C36.2163 217.308 39.1574 220.235 42.2342 223.014L58.7586 213.474C55.4939 210.826 52.3838 207.994 49.4442 204.995Z"
      fill={defaultColor}
    />
    <path
      className="d d13"
      d="M34.4725 185.925L18.875 194.93C20.98 198.355 23.2418 201.674 25.6503 204.875L41.374 195.797C38.9002 192.641 36.5951 189.345 34.4725 185.925Z"
      fill={defaultColor}
    />
    <path
      className="d d12"
      d="M24.1004 164.201L8.26758 173.342C9.70045 177.124 11.3073 180.82 13.0785 184.421L28.7108 175.396C26.9768 171.77 25.4356 168.034 24.1004 164.201Z"
      fill={defaultColor}
    />
    <path
      className="d d11"
      d="M18.6147 139.656L1.78125 149.375C2.48248 153.546 3.38549 157.649 4.47987 161.673L20.6996 152.309C19.767 148.175 19.0672 143.952 18.6147 139.656Z"
      fill={defaultColor}
    />
    <path
      className="d d10"
      d="M19.2191 111.594L0.114771 122.624C0.0411033 124.407 0.00390625 126.199 0.00390625 128C0.00390625 130.818 0.0949827 133.615 0.274353 136.388L18.0193 126.143C18.101 121.207 18.5077 116.351 19.2191 111.594Z"
      fill={defaultColor}
    />
    <path
      className="d d9"
      d="M30.2483 77.5132L5.13154 92.0144C3.61807 97.1906 2.42281 102.503 1.56836 107.928L22.8383 95.6478C24.7756 89.3427 27.2644 83.2791 30.2483 77.5132Z"
      fill={defaultColor}
    />
    <path
      className="d d8"
      d="M229.59 170.269C231.868 164.8 233.718 159.108 235.096 153.234L255.293 141.573C254.744 146.786 253.882 151.905 252.726 156.912L229.59 170.269Z"
      fill={defaultColor}
    />
    <path
      className="d d7"
      d="M237.559 137.955C237.853 134.676 238.003 131.356 238.003 128C238.003 126.623 237.978 125.251 237.927 123.886L255.235 113.894C255.718 118.302 255.977 122.777 256.001 127.308L237.559 137.955Z"
      fill={defaultColor}
    />
    <path
      className="d d6"
      d="M236.66 110.761C236.001 106.574 235.106 102.464 233.988 98.4476L250.015 89.1943C251.263 93.1222 252.327 97.1322 253.196 101.214L236.66 110.761Z"
      fill={defaultColor}
    />
    <path
      className="d d5"
      d="M230.054 86.8632C228.544 83.1222 226.835 79.4833 224.939 75.9595L240.537 66.9543C242.447 70.4682 244.198 74.0816 245.778 77.7846L230.054 86.8632Z"
      fill={defaultColor}
    />
    <path
      className="d d4"
      d="M218.684 65.7149C216.392 62.3832 213.92 59.1841 211.283 56.1315L227.114 46.9917C229.662 50.1055 232.066 53.3415 234.317 56.6897L218.684 65.7149Z"
      fill={defaultColor}
    />
    <path
      className="d d3"
      d="M202.686 47.2377C199.552 44.3376 196.248 41.6176 192.791 39.0944L209.61 29.3838C212.844 32.0629 215.944 34.898 218.898 37.8776L202.686 47.2377Z"
      fill={defaultColor}
    />
    <path
      className="d d2"
      d="M199.142 21.5722L181.409 31.8106C177.172 29.4531 172.763 27.3675 168.205 25.5773L187.318 14.5425C191.394 16.6775 195.34 19.0257 199.142 21.5722Z"
      fill={defaultColor}
    />
    <path
      className="d d1"
      d="M133.125 18.117L158.27 3.59937C163.604 4.89246 168.807 6.51963 173.856 8.45747L152.562 20.7516C146.271 19.3171 139.775 18.4218 133.125 18.117Z"
      fill={defaultColor}
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
  chain,
  size = 64,
}) => {
  return (
    <Wrapper chain={chain} size={size}>
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
