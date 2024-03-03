import useMediaQuery from '@mui/material/useMediaQuery';

import { Link } from 'react-router-dom';
import sprite from "../../../assets/sprite.svg"


export const Logo = () => {

     const isLogedIn = true;
     const isMobileScreen = useMediaQuery('(max-width: 767px)');


  return (
    <Link to="/">
         <svg width={isMobileScreen ? "126px" : "151px"} height={isMobileScreen ? "13px" : "17px"}>
                  <use xlinkHref={sprite + "#icon-Logo-1" } />
              </svg>
      </Link>
     )
 
};