import styled from 'styled-components';

export const MainTitle = styled.h1`
  position: relative;
  font-weight: 500;
  font-size: 38px;
  line-height: 105%;
  letter-spacing: 0.01em;
  width: 335px; //or max-width

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 111%;
    width: 598px;

    margin-bottom: 64px;
  }
`;

export const Outline = styled.svg`
  position: absolute;
  z-index: -1000;
  top: 43px;
  left: -9px;
  width: 98px;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 84px;
    left: -16px;
  }
`;
