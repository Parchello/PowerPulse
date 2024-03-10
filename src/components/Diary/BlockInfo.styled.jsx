import styled from 'styled-components';

export const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    width: 1248px;
  }
`;
