import styled from "styled-components";

export const Container = styled.div`
  padding-top: 127px;
  padding-bottom: 40px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
    padding-bottom: 48px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 178px;
    padding-top: 200px;
    padding-bottom: 114px;
  }
`;
