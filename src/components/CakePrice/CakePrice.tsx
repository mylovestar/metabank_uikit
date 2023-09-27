import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const StyledImg = styled.img`
  width: 24px;
  margin-right: 8px;
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://hodlx-fams-frontend.vercel.app/swap?outputCurrency=0xbCe2A8350BC759Dc4c9aFDB226a608C17C88d7D9"
      target="_blank"
    >
      {/* <LogoRound width="24px" mr="8px" /> */}
      <StyledImg src={'/images/tokens/0xbCe2A8350BC759Dc4c9aFDB226a608C17C88d7D9.png'} />
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(5)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
