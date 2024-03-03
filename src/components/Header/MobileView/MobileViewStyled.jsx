import styled from 'styled-components';

export const MainDiv = styled.div`
    height: 60px;
    background-color: transparent;
    color: white;
    display: flex;

    @media (min-width: 768px) {
    height: 84px;
  }

    
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


