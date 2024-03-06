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
  /* width: 100%; */
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
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
`;
