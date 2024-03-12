import styled from 'styled-components';
export const TitleDayBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #efede8;
  margin-top: 72px;
  margin-bottom: 32px;

  width: 223px;

  // mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    font-size: 24px;
    line-height: 28px;
    width: 168;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;
