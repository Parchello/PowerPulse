import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListOfProducts = styled.ul`
  padding: 16px 0;
  overflow: scroll;
  overflow-x: hidden;
  min-height: 305px;
  max-height: 802px;
  scroll-behavior: smooth;

  @media screen and (min-width: 768px) {
    height: 305px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;

    background: rgba(239, 237, 232, 0.1);
  }
`;

export const HeaderOfProductField = styled.div`
  display: flex;
`;

export const DairyProductsField = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  min-height: 335px;
  max-height: 824px;
  /* display: flex; */
  background: rgba(239, 237, 232, 0.05);
  padding: 16px;
  overflow: hidden;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }

  &::-webkit-scrollbar {
  }
`;
export const ProductBlock = styled.div`
  display: flex;
`;

export const ProdLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${(props) => props.theme.colors.orange};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 8px;
`;
