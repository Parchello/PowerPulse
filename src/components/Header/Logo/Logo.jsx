import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useMediaQuery from '@mui/material/useMediaQuery';
import sprite from '../../../assets/sprite.svg';
import { SelectUser } from '../../../redux/profile/selectors';
import { useAuth } from '../../../hooks/useAuth';

export const Logo = () => {
  const userParams = useSelector(SelectUser).params;
  const { isLoggedIn } = useAuth();

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (
    //     <Link
    //       to={
    //         userParams.birthday !== null || isLoggedIn === false ? '/' : '/profile'
    //       }
    //     >
    <svg
      width={isMobileScreen ? '126px' : '151px'}
      height={isMobileScreen ? '13px' : '17px'}
    >
      <use xlinkHref={sprite + '#icon-Logo-1'} />
    </svg>
    //     </Link>
  );
};
