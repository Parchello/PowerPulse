import { useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import sprite from "../../../assets/sprite.svg"
import { LogOutBtn } from './LogOut.Styled';
import { logOut } from "../../../redux/auth/operations";

export const LogOut = ({ color = '#EFEDE8' }) => {

  const dispatch = useDispatch();

   const handleLogOut = () => {
        
     dispatch(logOut());
    
    }

  return (
    <LogOutBtn typeof="button" onClick={handleLogOut}>
      Logout
      <svg width="20px" height="20px" stroke={color}>
        <use xlinkHref={sprite + '#icon-logout'} />
      </svg>
    </LogOutBtn>
  );
};
