import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useMediaQuery from '@mui/material/useMediaQuery';
import sprite from "../../../assets/sprite.svg"
import { Icons, LogOutContainer, MenuBtn, UserCircle, UserImg } from "./UserBar.Styled";
import { LogOut } from '../LogOut/LogOut';
import { SelectUser } from '../../../redux/profile/selectors';



export const UserBar = ( {openMenu}) => {

  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isDesktopScreen = useMediaQuery('(min-width: 1440px)');
  
  const user = useSelector(SelectUser);
  const defaultAvatar = (
    <svg width={isMobileScreen ? "21px" : "24px"} height={isMobileScreen ? "21px" : "24px"} fill='#EFEDE8'>
      <use xlinkHref={sprite + "#icon-user" } /></svg>)
  

  return (
          <Icons>
            
      <li>
        <Link to="/profile">
                  <svg width={isMobileScreen ? "24px" : "28px"} height={isMobileScreen ? "24px" : "28px"} stroke='rgba(239, 237, 232, 0.3)'>
                  <use xlinkHref={sprite + "#icon-settings" } />
          </svg>
        </Link>
          </li>
          
                <li>
                  <UserCircle>
                  {user.avatar !== null? <UserImg src={user.avatar} alt="User avatar"/>: defaultAvatar}
                  </UserCircle>
                </li>
          
              
           {isDesktopScreen ?
              <LogOutContainer>
              <LogOut color="#E6533C" />
              </LogOutContainer> :

        <li>
          <MenuBtn typeof='button'>
            <svg width={isMobileScreen ? "24px" : "32px"} height={isMobileScreen ? "24px" : "32px"} fill='#EFEDE8'
              onClick={openMenu}>
                  <use xlinkHref={sprite + "#icon-menu" } />
          </svg>
          </MenuBtn>
          </li>}
                
        </Icons>
     )
 
};