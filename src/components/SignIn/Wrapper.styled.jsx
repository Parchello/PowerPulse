import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 66px;
  margin: 0 auto;

  background-color: rgba(0, 0, 0, 0.3);

  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;

    margin: 0 0 0 0;

    max-width: 1440px;
    padding-left: 96px;
    padding-right: 32px;
    padding-bottom: 171px;

    gap: 76px;
  }
`;
