import styled from 'styled-components';

export const MainDiv = styled.div`
    height: 60px;
    background-color: transparent;
    color: white;
    display: flex;
    
`
export const MainDivLoggedIn = styled(MainDiv)`
    position: relative;
    background-color: black;
    border-bottom: 1px solid rgba(239, 237, 232, 0.20);
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const NavigationList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
`;

export const UserCircle = styled.div`  
display: flex;
align-items: center;
justify-content: center;

  height: 37px;
  width: 37px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #E6533C;

  @media (min-width: 768px) {
    height: 46px;
  width: 46px;
  }

`  

export const Logo = styled.div`

    display: flex;
    gap: 8px;
    
`

export const Text = styled.p`
    color: white;
    margin: 0;
`