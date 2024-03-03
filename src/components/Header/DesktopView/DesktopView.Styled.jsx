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