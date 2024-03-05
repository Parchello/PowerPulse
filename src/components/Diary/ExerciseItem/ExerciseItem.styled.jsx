import styled from 'styled-components';

export const TitleName = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: orange;
  margin-bottom: 8px;
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

  margin-bottom: 16px;
`;

export const BottomInf = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;

  margin-bottom: 16px;
`;

export const BottomInfField = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 10px 14px;
  width: 81px;
  height: 38px;
`;
