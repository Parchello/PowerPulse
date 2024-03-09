import styled from 'styled-components';


export const Icons = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 14px;
    justify-content: center;
    align-items: center; 

    @media (min-width: 768px) {
    
        margin-left: 32px;
  }

   @media (min-width: 1440px) {

        margin-left: 32px;
  } 
`

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

export const LogOutContainer = styled.li`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center; 
`

export const MenuBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`
