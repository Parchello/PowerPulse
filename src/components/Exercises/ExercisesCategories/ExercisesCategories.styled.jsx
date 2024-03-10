import styled from 'styled-components';

export const CategoryList = styled.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 40px;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 0;
  }
`;

export const CategoryExercises = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${(props) => props.theme.colors.grey};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;
