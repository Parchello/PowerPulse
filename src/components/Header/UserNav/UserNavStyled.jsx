import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;    

    @media (min-width: 1440px) {
        flex-direction: row;
  }
`

export const StyledLink = styled(NavLink)`
    border-radius: 12px;
    display: block;

    &.active {
        border: 1px solid #EFEDE8;
    }

     @media (min-width: 1440px) {
        
        &.active {
            background-color: #E6533C;
            border: none;
        }
  }
`

export const NavigationBtn = styled.button`
    display: flex;
    padding: 10px 27px;
    justify-content: center;
    align-items: center; 

    background-color: transparent;
    color: #EFEDE8;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.20);
    

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28;
    
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5; 
  }
`


