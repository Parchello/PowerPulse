import styled from 'styled-components';

export const TitleName = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: orange;
  margin-bottom: 8px;
`;

export const LiItemProducts = styled.li`
  margin-bottom: 40px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    margin: 0;
  }
`;

export const ProductInfo = styled.p`
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
    padding: 8px;
    width: 204px;
    height: 40px;
    /* overflow: scroll; */
  }

  @media screen and (min-width: 1440px) {
    border: 1px solid rgba(239, 237, 232, 0.3);
    border-radius: 12px;
    width: 212px;
    height: 40px;
  }
`;

export const ProductInfoCategory = styled.div`
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
    padding: 8px 14px;
    width: 128px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    border: 1px solid rgba(239, 237, 232, 0.3);
    border-radius: 12px;
    padding: 8px 14px;
    width: 166px;
    height: 40px;
  }
`;

export const BottomInf = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;

  margin-bottom: 16px;
`;

export const ProductBottomInfo = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 10px 14px;
  width: 81px;
  height: 38px;

  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1440px) {
    border: 1px solid rgba(239, 237, 232, 0.3);
    border-radius: 12px;
    padding: 8px 14px;
    width: 105px;
    height: 40px;
  }
`;
