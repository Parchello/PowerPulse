import {  MainDiv, MainDivLoggedIn, NavIconsDiv } from './DesktopView.Styled';
import { Logo } from '../Logo/Logo';
import { UserNav } from '../UserNav/UserNav';
import { UserBar } from '../UserBar/UserBar';

export const DesktopView = () => {

const isLoggedIn = true;

  return (
    <>
    {
      isLoggedIn?
     <MainDivLoggedIn>
        <Logo/>
        <NavIconsDiv> 
            <UserNav/>
            <UserBar/>
        </NavIconsDiv>
      </MainDivLoggedIn > :

          <MainDiv>
            <Logo/>
          </MainDiv>
    }
    </> )
   
}