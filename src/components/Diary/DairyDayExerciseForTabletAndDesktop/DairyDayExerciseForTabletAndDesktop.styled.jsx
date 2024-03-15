import styled from 'styled-components';

export const InfoBodyPartTable = styled.p`
  height: 40px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  margin-bottom: 16px;

  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px;
  width: 90px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 115px;
  }
`;

export const InfoEquipTable = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px 10px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  overflow: hidden;
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  width: 132px;
  height: 40px;

  @media screen and (min-width: 1440px) {
    width: 157px;
  }
`;

export const InfoNameTable = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  height: 40px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  overflow: hidden;
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 8px;
  width: 128px;

  @media screen and (min-width: 1440px) {
    width: 131px;
  }
`;

export const BottomInf = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;

  margin-bottom: 16px;
`;

export const BottomInfFieldTargetTable = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;

  width: 84px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 1440px) {
    width: 106px;
  }
`;

export const BottomInfFieldTimeTable = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 72px;
`;

export const BottomInfFieldCaloriesTable = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;

  width: 78px;

  @media screen and (min-width: 1440px) {
    width: 91px;
  }
`;
