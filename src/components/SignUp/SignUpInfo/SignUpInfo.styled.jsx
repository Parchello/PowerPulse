import styled from "styled-components";

export const Title = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 1.17;
    color: ${(p) => p.theme.colors.white};

    @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
  }
`

export const Paragraph = styled.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${(p) => p.theme.colors.grey};
    margin-top: 14px;
    margin-bottom: 28px;
    max-width: 335px;

    @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 16px;
    margin-bottom: 32px;
    max-width: 496px;
  }
`