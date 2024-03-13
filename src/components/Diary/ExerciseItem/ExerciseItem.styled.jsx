import styled from 'styled-components';

export const TitleName = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: orange;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    overflow: hidden;
  }
`;

export const LiExcersiceItem = styled.li`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    margin: 0;
  }
`;

export const ProductInfoBodyPart = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 10px 14px;
  width: 297px;
  min-height: 38px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(239, 237, 232, 0.3);
    border-radius: 12px;
    padding: 8px;
    width: 90px;
    height: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    width: 115px;
  }
`;

export const ProductInfoEquip = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 10px 14px;
  width: 297px;
  min-height: 38px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  overflow: hidden;
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(239, 237, 232, 0.3);
    border-radius: 12px;
    padding: 8px 10px;
    width: 132px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 157px;
  }
`;

export const ProductInfoName = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 10px 14px;
  width: 297px;
  height: 38px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  overflow: hidden;
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding: 8px;
    width: 128px;
  }

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

export const BottomInfFieldTarget = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px;
  width: 80px;
  height: 38px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 78px;
  }

  @media screen and (min-width: 1440px) {
    width: 106px;
  }
`;

export const BottomInfFieldTime = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px;
  width: 76px;
  height: 38px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 72px;
  }

  @media screen and (min-width: 768px) {
    width: 72px;
  }
`;

export const BottomInfFieldCalor = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px;
  width: 81px;
  height: 38px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 84px;
  }

  @media screen and (min-width: 1440px) {
    width: 91px;
  }
`;
