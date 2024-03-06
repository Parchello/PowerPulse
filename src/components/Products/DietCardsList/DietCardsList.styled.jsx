import styled from 'styled-components';

export const DietBlockContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    overflow-y: auto;
    max-height: 500px;
  }

  @media screen and (min-width: 1440px) {
    width: 938px;
  }
`;

export const DietBlock = styled.li`
  padding: 16px;
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 141px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const DietTextBox = styled.div`
  background: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  padding: 5px 7px;
  width: 41px;
  height: 24px;
`;

export const DietText = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
`;

export const RecomendBox = styled.div`
  margin-left: auto;
  margin-top: -20px;
  margin-bottom: 41px;
  display: flex;
  width: 168px;
  height: 18px;
`;

export const RecomendStatusCircle = styled.div`
  margin: auto;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background: #419b09;
`;

export const RecommendStatusText = styled.p`
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`;

export const AddBtn = styled.button`
  margin-left: 16px;
  display: flex;
  gap: 8px;
  padding: 0;
  width: 49px;
  height: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: #e6533c;
  background-color: rgba(255, 255, 255, 0);
  border: none;
`;

// diet name

export const DietNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const DietName = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #efede8;
`;

// diet info

export const DietInfoList = styled.ul`
  display: flex;
  gap: 16px;
  align-self: flex-end;
  margin-top: 8px;
`;

export const DietInfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DietInfoHeading = styled.h4`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
  margin: 0;
`;

export const DietInfoValue = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
  margin: 0;
`;
