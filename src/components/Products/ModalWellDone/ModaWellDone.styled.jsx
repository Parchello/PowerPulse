import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  overflow-y: auto;
  transition: opacity 0.36;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

export const ModalContent = styled.div`
  position: relative;
  margin: 20px;

  padding: 48px 89px;
  width: 335px;
  height: 362px;
  max-width: 600px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: #10100f;

  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;

  @media screen and (min-width: 768px) {
    padding: 64px 136px;
    width: 430px;
    height: 428px;
  }
`;

// content

export const ImgBox = styled.div`
  background-color: inherit;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 123px;
  height: 84px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const WellDonebox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 106px;
  height: 66px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 109px;
    margin-bottom: 32px;
  }
`;

export const WellDoneTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #efede8;
`;

export const CaloriesWellBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 79px;
  height: 18px;
  margin-bottom: 24px;
`;

export const CaloriesWellText = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.3);
`;

export const CaloriesWellValue = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: #e6533c;
`;

export const NextProductBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  color: #efede8;
  border-radius: 12px;
  border: none;
  width: 157px;
  height: 42px;
  background: #e6533c;
  margin-bottom: 16px;

  &:hover {
    background: #ef8964;
  }

  @media screen and (min-width: 768px) {
    line-height: 150%;
    height: 52px;
  }
`;

export const BackBtn = styled(NavLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.3);
  border: none;
  background-color: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 18px;

  &:hover {
    color: #efede8;
  }
`;

export const RawSvg = styled.svg``;

// close button

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
`;
