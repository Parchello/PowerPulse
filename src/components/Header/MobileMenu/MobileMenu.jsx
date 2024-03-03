import { MainDiv, LogOutDiv, CloseBtn } from './MobileMenuStyled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import sprite from "../../../assets/sprite.svg"
import { UserNav } from '../UserNav/UserNav';
import { LogOut } from '../LogOut/LogOut';


export const MobileMenu = ({ closeMenu, isOpen }) => {

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (
    <Slide direction="down" in={isOpen} easing={{ enter: 'cubic-bezier(.17,.67,.83,.67)', exit: 'cubic-bezier(.17,.67,.83,.67)' }}>
    <MainDiv>
      <CloseBtn width={isMobileScreen ? "24px" : "32px"} height={isMobileScreen ? "24px" : "32px"} stroke='#EFEDE8'
      onClick={closeMenu}>
          <use xlinkHref={sprite + "#icon-close"} />
          </CloseBtn>
      <UserNav/>
        <LogOutDiv>
          <LogOut color="#EFEDE8"/>
      </LogOutDiv>
    </MainDiv>
  </Slide>
  )
}