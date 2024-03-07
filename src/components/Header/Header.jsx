import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopView } from './DesktopView/DesktopView';
import { MobileView } from './MobileView/MobileView';
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export const Header = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isBigScreen = useMediaQuery('(min-width: 1440px)');


  return ( <header style={{ borderBottom: isLoggedIn ? "1px solid rgba(239, 237, 232, 0.20)" : "none" }}>

    {isBigScreen ? <DesktopView isLoggedIn={isLoggedIn} /> : <MobileView isLoggedIn={isLoggedIn} />}
  
     </header>)
 
}; 