import { Navigation, NavigationBtn, StyledLink } from "./UserNav.Styled";


export const UserNav = () => {

  return (
      <nav>
                <Navigation>
                  <li><StyledLink to="/diary"><NavigationBtn>Diary</NavigationBtn></StyledLink></li>
                  <li><StyledLink to="/products"><NavigationBtn>Products</NavigationBtn></StyledLink></li>
                  <li><StyledLink to="/exercises"><NavigationBtn>Exercises</NavigationBtn></StyledLink></li>
                </Navigation>
        </nav>
        
     )
 
};