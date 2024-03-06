import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopView } from './DesktopView/DesktopView';
import { MobileView } from './MobileView/MobileView';


export const Header = () => {

  const isBigScreen = useMediaQuery('(min-width: 1440px)');
  const isLoggedIn = true;


  return ( <header style={{ borderBottom: isLoggedIn ? "1px solid rgba(239, 237, 232, 0.20)" : "none" }}>

    {isBigScreen ? <DesktopView isLoggedIn={isLoggedIn} /> : <MobileView isLoggedIn={isLoggedIn} />}
  
     </header>)
 
}; 