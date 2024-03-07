import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  gap: 14px;

  margin-bottom: 229.64px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 170px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const SignUp = styled(NavLink)`
  border-radius: 12px;
  padding: 12px 40px;
  display: block;
  height: 100%;
  background-color: ${(p) => p.theme.colors.orange};
  color: ${(p) => p.theme.colors.white};

  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: background-color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  :focus {
    background-color: ${(p) => p.theme.colors.orangeLight};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    padding: 16px 60px;
  }
`;

export const SignIn = styled(NavLink)`
  border: 1px solid ${(p) => p.theme.colors.grey};
  color: ${(p) => p.theme.colors.white};

  background-color: transparent;
  display: block;
  border-radius: 12px;
  padding: 12px 40px;
  height: 100%;

  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: border-color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  :focus {
    border-color: ${(p) => p.theme.colors.orange};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    padding: 16px 60px;
  }
`;