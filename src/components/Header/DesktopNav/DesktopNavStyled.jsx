import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainDiv = styled.div`
    height: 84px;
    background-color: transparent;
    display: flex;
    align-items: center;
    
`
export const MainDivLoggedIn = styled(MainDiv)`
    background-color: black;
    border-bottom: 1px solid rgba(239, 237, 232, 0.20);
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`



export const NavIconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Navigation = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;    
`

export const StyledLink = styled(NavLink)`
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.20);
    display: block;

 &.active {
    background-color: #E6533C;
   
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
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
`

export const Icons = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center; 

    margin-left: 32px;
`

export const UserCircle = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;

    height: 46px;
    width: 46px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #E6533C;
`  

export const LogOut = styled.li`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center; 
`


export const Text = styled.p`
   color: #EFEDE8;
   font-family: Roboto;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 1,5;
`

