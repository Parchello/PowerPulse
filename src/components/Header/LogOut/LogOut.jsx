import useMediaQuery from '@mui/material/useMediaQuery';

import { Link } from 'react-router-dom';
import sprite from "../../../assets/sprite.svg"
import { Text } from './LogOut.Styled';

export const LogOut = ({ color = '#EFEDE8' }) => {
  const isLogedIn = true;
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Text>Logout</Text>
      <svg width="20px" height="20px" stroke={color}>
        <use xlinkHref={sprite + '#icon-logout'} />
      </svg>
    </>
  );
};
