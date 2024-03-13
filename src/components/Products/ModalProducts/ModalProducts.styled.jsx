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
  padding: 48px 24px;
  width: 335px;
  height: 280px;
  max-width: 600px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: #10100f;
  pad: 40px 20px 20px 20px;
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;

  @media screen and (min-width: 768px) {
    width: 479px;
    height: 286px;
    padding: 48px 32px;
  }
`;

// content

export const DietInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  width: 287px;
  height: 84px;

  @media screen and (min-width: 768px) {
    width: 415px;
    height: 40px;
    flex-direction: row;
  }
`;

export const DietNameText = styled.input`
  background: #10100f;
  border: 1px solid #e6533c;
  border-radius: 12px;
  padding: 8px 14px 8px 14px;
  width: 287px;
  height: 34px;

  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
  }
`;

export const GramsInput = styled.input`
  background: #10100f;
  color: #efede8;
  border: 1px solid #e6533c;
  border-radius: 12px;
  padding: 8px 14px 8px 14px;
  width: 287px;
  height: 34px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    text-align: right;
  }

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`;

export const CaloriesBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 65px;
  height: 18px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const CaloriesText = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
`;

export const CaloriesValue = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  width: 286px;
  height: 42px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    width: 309px;
    height: 52px;
  }
`;

export const AddButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  background: #e6533c;
  color: #efede8;
  border-radius: 12px;
  border: none;
  padding: 12px 32px;
  width: 151px;
  height: 42px;

  &:hover {
    background: #ef8964;
  }

  @media screen and (min-width: 768px) {
    line-height: 150%;
    height: 52px;
  }
`;

export const CancelBox = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  background: #10100f;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 12px 32px;
  width: 121px;
  height: 42px;

  &:hover {
    border-color: #e6533c;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    width: 142px;
    height: 52px;
  }
`;

// close button

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
