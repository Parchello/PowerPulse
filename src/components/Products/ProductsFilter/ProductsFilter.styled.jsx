import styled from 'styled-components';

export const MainFiltersContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
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
    bottom: 35px;
  }
`;

export const SvgIconClearInput = styled.svg`
  position: relative;
  z-index: 2;
  float: right;
  bottom: 32px;
  right: 22px;

  @media screen and (min-width: 768px) {
    bottom: 35px;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
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

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectorC = styled.select`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  background-color: transparent;
  outline: none;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 146px;
  height: 46px;

  cursor: pointer;
  appearance: none;

  @media screen and (min-width: 768px) {
    line-height: 150%;
    width: 192px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    background-color: transparent;
  }
`;

export const SvgChevronDown = styled.svg`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const Option = styled.option`
  background-color: #1c1c1c;
  border-radius: 12px;
  padding: 14px 32px 14px 14px;
  width: 146px;
  height: 228px;
  text-indent: 20px;
  text-transform: capitalize;
`;

export const SelectorA = styled.select`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  background-color: transparent;
  outline: none;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 173px;
  height: 46px;

  cursor: pointer;
  appearance: none;

  @media screen and (min-width: 768px) {
    line-height: 150%;
    width: 204px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0);
  }
`;
