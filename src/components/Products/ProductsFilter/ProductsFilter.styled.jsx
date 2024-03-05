import styled from 'styled-components';

export const FiltersContainer = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
  }
`;

export const Filters = styled.div`
  width: 335px;
  height: 108px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SvgIcon = styled.svg`
  position: relative;
  z-index: 1;
  float: right;
  bottom: 32px;
  right: 14px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SearchInput = styled.input`
  background-color: black;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 335px;
  height: 46px;

  &::placeholder {
    color: #efede8;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SelectorBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 335px;
  height: 46px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SelectorC = styled.select`
  background-color: black;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 146px;
  height: 46px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SelectorA = styled.select`
  background-color: black;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 173px;
  height: 46px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
