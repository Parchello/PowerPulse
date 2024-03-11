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
  text-decoration: none;
  color: black;
  position: relative;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${(props) => props.theme.colors.grey};
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  padding-bottom: 7px;

  &:hover,
  :focus {
    color: ${(props) => props.theme.colors.white};
  }
  &.current {
    color: ${(props) => props.theme.colors.white};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -7px;
    opacity: 0;
    border-radius: 2px;
    transition: ${(props) => props.theme.transition};

    height: 4px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.orange};
    border-radius: 2px;
  }
  &.current:after {
    opacity: 1;
  }
`;
