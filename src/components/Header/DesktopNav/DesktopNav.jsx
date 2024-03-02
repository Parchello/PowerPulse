import { Icons, LogOut, MainDiv, MainDivLoggedIn, NavIconsDiv, Navigation, NavigationBtn, StyledLink, Text, UserCircle } from './DesktopNavStyled';
import sprite from "../../../assets/sprite.svg"

export const DesktopNav = () => {

const isLoggedIn = true;

  return (
    <>
    {
      isLoggedIn?
     <MainDivLoggedIn>
            <svg width="151px" height="17px">
                  <use xlinkHref={sprite + "#icon-Logo-1" } />
              </svg>
           
        <NavIconsDiv> 
              <nav>
                <Navigation>
                  <li><StyledLink to="/diary"><NavigationBtn>Diary</NavigationBtn></StyledLink></li>
                  <li><StyledLink to="/products"><NavigationBtn>Products</NavigationBtn></StyledLink></li>
                  <li><StyledLink to="/exercises"><NavigationBtn>Exercises</NavigationBtn></StyledLink></li>
                </Navigation>
        </nav>
        
              <Icons>
                <li>
                  <svg width="28px" height="28px" stroke='rgba(239, 237, 232, 0.3)'>
                  <use xlinkHref={sprite + "#icon-settings" } />
                  </svg>
                </li>
                <li>
                  <UserCircle>
                  <svg width="28px" height="28px" fill='#EFEDE8'>
                  <use xlinkHref={sprite + "#icon-user" } />
                  </svg>
                  </UserCircle>
                </li>
                <LogOut>
                <Text>Logout</Text>
                <svg width="20px" height="20px" stroke='#E6533C'>
                    <use xlinkHref={sprite + "#icon-logout"} /> 
                  </svg>
                </LogOut>
        </Icons>
        </NavIconsDiv>
  </MainDivLoggedIn > :

          <MainDiv>
            <svg width="151px" height="17px">
                  <use xlinkHref={sprite + "#icon-Logo-1" } />
            </svg>
          </MainDiv>
    }
    </> )
   
}