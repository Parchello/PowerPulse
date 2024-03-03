import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopView } from './DesktopView/DesktopView';
import { MobileView } from './MobileView/MobileView';


export const Header = () => {

  const isBigScreen = useMediaQuery('(min-width: 1440px)')


  return (<>
    {isBigScreen ? <DesktopView /> : <MobileView />}
     </>)
 
}; 