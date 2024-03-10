import styled from 'styled-components';

export const MainInfoBlock = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 14px;
  width: 157px;
  height: 96px;
  background-color: ${(props) => props.theme.colors.orange};

  padding-top: 15px;
  padding-left: 18px;
  padding-bottom: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoBlockLabel = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: rgba(239, 237, 232, 0.8);
`;

export const InfoBlockValue = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${(props) => props.theme.colors.white};
`;

export const SecondaryInfoBlock = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 14px;
  width: 157px;
  height: 96px;
  background-color: rgba(239, 237, 232, 0.05);
`;

export const DiaryWarningText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.3);
`;

export const DiaryInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const MainBlockOfMainInfoBlock = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const MainBlockOfSecondaryInfoBlock = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  width: 335px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const RememberText = styled.div`
  display: flex;
  gap: 8px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 505px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;
