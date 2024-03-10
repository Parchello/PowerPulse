import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
`;

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  border: none;

  border-radius: 12px;
  width: 162px;
  height: 52px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.orange};
  transition: ${(props) => props.theme.transition};
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.orangeLight};
  }
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  transition: ${(props) => props.theme.transition};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
  }
`;
