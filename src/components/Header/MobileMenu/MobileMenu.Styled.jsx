import styled from 'styled-components';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
>>>>>>> 4278e6dd495bab5ddc216c2934ad871c3dacbf9d

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

  overflow: hidden;

  @media (min-width: 768px) {
    padding: 32px 32px;
  }
`;

export const CloseBtn = styled.svg`
  align-self: flex-end;
`;

<<<<<<< HEAD
export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  display: block;

  &.active {
    border: 1px solid #efede8;
  }
`;

export const NavigationBtn = styled.button`
  display: flex;
  padding: 10px 27px;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid #efede8;
  border: 1px solid rgba(239, 237, 232, 0.2);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const LogOutDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogOutText = styled.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
=======
export const LogOutDiv = styled.div`   
    display: flex;
    gap:8px;
    align-items: center; 
  }
  `
>>>>>>> 4278e6dd495bab5ddc216c2934ad871c3dacbf9d
