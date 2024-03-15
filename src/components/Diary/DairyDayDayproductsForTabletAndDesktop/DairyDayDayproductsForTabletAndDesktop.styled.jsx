import styled from 'styled-components';

export const ProductInfoTable = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px;
  width: 204px;
  height: 40px;

  overflow: hidden;
  /* display: flex; */
  align-items: center;

  margin-bottom: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 1440px) {
    border: 1px solid rgba(239, 237, 232, 0.3);
    border-radius: 12px;
    width: 212px;
    height: 40px;
  }
`;

export const ProductInfoCategoryTable = styled.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  overflow: hidden;
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px 14px;
  width: 128px;
  height: 40px;

  @media screen and (min-width: 1440px) {
    border: 1px solid rgba(239, 237, 232, 0.3);
    border-radius: 12px;
    padding: 8px 14px;
    width: 166px;
    height: 40px;
  }
`;

export const ProductBottomInfoTable = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 8px 14px;
  width: 81px;
  height: 38px;

  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 105px;
    height: 40px;
  }
`;
