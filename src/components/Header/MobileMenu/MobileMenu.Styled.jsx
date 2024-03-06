import styled from 'styled-components';

export const MainDiv = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #e6533c;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
  z-index: 1000;

  /* transform: translateY(-498px);
  visibility: hidden;
  
  transform: none;
  transition: transform 225ms cubic-bezier(0.17, 0.67, 0.83, 0.67) 0ms; */

  overflow: hidden;

  @media (min-width: 768px) {
    padding: 32px 32px;
  }
`;

export const CloseBtn = styled.svg`
  align-self: flex-end;
`;

export const LogOutDiv = styled.div`   
    display: flex;
    gap:8px;
    align-items: center; 
  `;
