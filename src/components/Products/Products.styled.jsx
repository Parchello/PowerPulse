import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  margin: 0 auto;
  outline: 2px solid red;

  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-right: 32px;
    padding-bottom: 171px;

    display: flex;
    gap: 76px;
  }
`;

export const MainText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const FiltersContainer = styled.div`
  margin-bottom: 40px;
`;

export const Filters = styled.div`
  width: 335px;
  height: 108px;
`;

export const SvgIcon = styled.svg`
  position: relative;
  z-index: 1;
  float: right;
  bottom: 32px;
  right: 14px;
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
`;

export const SelectorBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 335px;
  height: 46px;
`;

export const SelectorC = styled.select`
  background-color: black;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 146px;
  height: 46px;
`;

export const SelectorA = styled.select`
  background-color: black;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 173px;
  height: 46px;
`;

export const DietBlockContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DietBlock = styled.li`
  /* display: flex;
  flex-direction: column;
  gap: 20px; */
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 140px 105px;
  width: 335px;
  height: 141px;
  background: rgba(239, 237, 232, 0.05);
`;
