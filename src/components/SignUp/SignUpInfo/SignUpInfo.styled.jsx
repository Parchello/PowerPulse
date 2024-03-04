import styled from "styled-components";

export const Title = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 117%;
    color: ${(p) => p.theme.colors.white};

    @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137%;
  }
`

export const Paragraph = styled.p`
    font-size: 14px;
    line-height: 129%;
    color: ${(p) => p.theme.colors.grey};
    margin-top: 14px;
    margin-bottom: 28px;
    max-width: 335px;

    @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-top: 16px;
    margin-bottom: 32px;
    max-width: 496px;
  }
`