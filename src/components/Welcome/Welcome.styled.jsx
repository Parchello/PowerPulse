import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 40px;
  padding-right: 20px;
  /* outline: 2px solid red; */

  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 0;
    padding-bottom: 171px;

    display: flex;
    gap: 76px;
  }
`;
