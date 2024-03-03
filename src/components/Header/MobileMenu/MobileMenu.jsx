import { MainDiv, Navigation, NavigationBtn, LogOutText, StyledLink, LogOutDiv, CloseBtn } from './MobileMenuStyled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import sprite from "../../../assets/sprite.svg"


export const MobileMenu = ({ closeMenu, isOpen }) => {

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (<Slide direction="down" in={isOpen} easing={{ enter: 'cubic-bezier(.17,.67,.83,.67)', exit: 'cubic-bezier(.17,.67,.83,.67)' } }>
    <MainDiv>
      <CloseBtn width={isMobileScreen ? "24px" : "32px"} height={isMobileScreen ? "24px" : "32px"} stroke='#EFEDE8'
      onClick={closeMenu}>
          <use xlinkHref={sprite + "#icon-close"} />
          </CloseBtn>
      <nav>
        <Navigation>
          <li><StyledLink to="/diary"><NavigationBtn>Diary</NavigationBtn></StyledLink></li>
          <li><StyledLink to="/products"><NavigationBtn>Products</NavigationBtn></StyledLink></li>
          <li> <StyledLink to="/exercises"><NavigationBtn>Exercises</NavigationBtn></StyledLink></li>
        </Navigation>
        </nav>
      <LogOutDiv><LogOutText >Logout</LogOutText>
        <svg width="20px" height="20px" stroke='#EFEDE8'>
          <use xlinkHref={sprite + "#icon-logout"} />
          </svg>
      </LogOutDiv>
    </MainDiv>
  </Slide>
  )
}