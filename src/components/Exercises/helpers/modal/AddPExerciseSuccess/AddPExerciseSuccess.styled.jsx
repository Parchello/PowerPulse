import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
`;

export const DoneContainer = styled.div`
  @media screen and (max-width: 767px) {
    gap: 0;
  }
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  text-align: center;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  &:last-child {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;

export const Button = styled.button`
  @media screen and (max-width: 767px) {
    width: 157px;
    height: 42px;
  }
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

export const LinkToDairy = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  transition: ${(props) => props.theme.transition};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: ${(props) => props.theme.transition};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
  }
`;
