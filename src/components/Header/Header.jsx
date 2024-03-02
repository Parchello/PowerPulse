import useMediaQuery from '@mui/material/useMediaQuery';
import { MobileNav } from './MobileNav/MobileNav';
import { DesktopNav } from './DesktopNav/DesktopNav';

export const Header = () => {

  const isBigScreen = useMediaQuery('(min-width: 1440px)')


  return (<>
    {isBigScreen ? <DesktopNav /> : <MobileNav />}
     </>)
 
}; 