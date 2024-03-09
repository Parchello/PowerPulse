import styled from 'styled-components';

export const MainFiltersContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 454px;
  }
`;

export const MainText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 137%;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Filters = styled.div`
  margin-bottom: 40px;
  width: 335px;
  height: 108px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    width: 664px;
    height: 52px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 68px;
    margin-bottom: 28px;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const SearchInputBox = styled.div`
  height: 46px;

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
  }

  @media screen and (min-width: 768px) {
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
  outline: none;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 335px;
  height: 46px;

  &::placeholder {
    color: #efede8;
  }

  &:focus,
  :active {
    border: 1px solid ${(p) => p.theme.colors.orange};
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const SelectorC = styled.select`
  background-color: black;
  outline: none;
  /* background-color: #1c1c1c; */
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 146px;
  height: 46px;

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    /* background-color: rgba(0, 0, 0, 0); */
    background-color: transparent;
  }
`;

//тут намагався стилізувати опції в селекті. Застосувався лише бекграунд
export const Option = styled.option`
  background-color: #1c1c1c;
  border-radius: 12px;
  padding: 14px 32px 14px 14px;
  width: 146px;
  height: 228px;
`;

export const SelectorA = styled.select`
  background-color: black;
  outline: none;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 173px;
  height: 46px;

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0);
  }
`;
