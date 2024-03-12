import styled from 'styled-components';

export const Section = styled.div`
  display: flex;

  //mobile
  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 320px) {
    align-items: center;
  }

  @media screen and (min-width: 375px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }
  //tablet

  @media screen and (min-width: 764px) and (max-width: 1439px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
