import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopView } from './DesktopView/DesktopView';
import { MobileView } from './MobileView/MobileView';
import { HeaderContainer } from '../Header/Header.styled';


export const Header = () => {

  const isBigScreen = useMediaQuery('(min-width: 1440px)');
  const isLogedIn = true;


  return ( <header style={{ borderBottom: isLogedIn ? "1px solid rgba(239, 237, 232, 0.20)" : "none" }}>

      {isBigScreen ? <DesktopView /> : <MobileView />}
  
     </header>)
 
}; 