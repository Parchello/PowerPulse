import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%;
  padding-left: 20px;
  padding-right: 20px; */
  padding-bottom: 40px;
  /* margin: 0 auto; */
  outline: 2px solid red;

  /* max-width: 375px; */

  @media screen and (min-width: 768px) {
    /* max-width: 768px;
    padding-left: 32px;
    padding-right: 32px; */

    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px;
    padding-left: 96px; */
    padding-right: 0;
    padding-bottom: 171px;

    display: flex;
    gap: 76px;
  }
`;