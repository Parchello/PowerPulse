import styled from 'styled-components';

export const MainDiv = styled.div`
    
    position: absolute;

    padding-left: 20px;
    padding-right: 20px;

    left: 50%;
    transform: translateX(-50%);
    
    width: 100%;

    max-width: 375px;

    height: 60px;
    background-color: transparent;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    

    @media (min-width: 768px) {
    
    height: 84px;
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  
  }

    
`
export const MainDivLoggedIn = styled(MainDiv)`

    position: relative;

    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


