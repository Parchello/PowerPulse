import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorContainer = styled.div`
  width: 240px;
  padding: 24px 0px;
  width: 240px;
  background-color: ${(p) => p.theme.colors.orange};
  height: 100vh;

  @media screen and (min-width: 768px) {
    padding: 32px 0px;
    width: 420px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 32px 0px;
  }
`;

export const WrapperError = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  transform: translateY(20vh);

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
    transform: translateY(20vh);
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 96px;
  }
`;

export const ErrorTitle = styled.h1`
  font-weight: 500;
  font-size: 66px;
  line-height: 100%;
  letter-spacing: 1%;

  color: ${(p) => p.theme.colors.white};

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 94%;
    letter-spacing: 1%;
    margin-bottom: 28px;
  }
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0px;
  color: ${(p) => p.theme.colors.white};

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const ErrorButton = styled(Link)`
  width: 147px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  display: block;
  background-color: ${(p) => p.theme.colors.orange};
  color: ${(p) => p.theme.colors.white};

  text-align: center;
  // padding-top: 12px;
  padding: 12px 40px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: background-color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  :focus {
    background-color: ${(p) => p.theme.colors.orangeLight};
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 56px;
    font-size: 20px;
    line-height: 120%;
  }
`;

export const SvgLink = styled(Link)`
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 96px;
  }
`;
