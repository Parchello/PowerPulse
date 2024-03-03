import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    padding: 127px 20px 0px 20px; //check right values
    margin: 0 auto;
    max-width: 375px;

    @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-top: 189px; //check right values
    padding-bottom: 349px; //check right values
  }

    @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-top: 200px; //check right values
    padding-bottom: 114px; //check right values
}
`

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
// треба првильно вирівняти на декстоп та планшет
export const LinkText = styled.p`
    font-size: 12px;
    line-height: 150%;
    color: rgba(239, 237, 232, 0.6);
    margin-top: 12px;
`

export const SigninLink = styled(Link)`
    text-decoration: underline;
    color: ${(p) => p.theme.colors.white};
`