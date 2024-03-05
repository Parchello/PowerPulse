import styled from 'styled-components';

export const MainInfoBlock = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 14px;
  width: 157px;
  height: 96px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
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
  gap: 13px;
`;