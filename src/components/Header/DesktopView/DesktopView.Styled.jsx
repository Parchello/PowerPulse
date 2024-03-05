import styled from 'styled-components';

export const MainDiv = styled.div`

    position: absolute; 
    
    padding-left: 96px;
    padding-right: 96px;
    
    left: 50%;
    transform: translateX(-50%);
    
    width: 1440px;

    height: 84px;
    background-color: transparent;
    display: flex;
    align-items: center;

    
   

`

export const MainDivLoggedIn = styled(MainDiv)`

    position: relative;

    background-color: black;    
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