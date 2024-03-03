import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import {  MainDiv, MainDivLoggedIn, Logo, Text, NavigationList, UserCircle } from './MobileNavStyled';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import sprite from "../../../assets/sprite.svg"


export const MobileNav = () => {

  const isLoggedIn = true;
  const [isOpen, setIsOpen] = useState(false);

  const isMobileScreen = useMediaQuery('(max-width: 767px)');


  return (<>
    {isLoggedIn ?
      <MainDivLoggedIn>
        <svg width={isMobileScreen ? "82px" : "151px"} height={isMobileScreen ? "12px" : "17px"}>
                  <use xlinkHref={sprite + "#icon-Logo-1" } />
        </svg>
      <nav>
        <NavigationList>
          <li><Link to="/">
          <svg width={isMobileScreen ? "24px" : "28px"} height={isMobileScreen ? "24px" : "28px"} stroke='rgba(239, 237, 232, 0.3)'>
                  <use xlinkHref={sprite + "#icon-settings" } />
                  </svg>
          </Link>
          </li>
          <li><Link to="/">
            <UserCircle>
              <svg width={isMobileScreen ? "21px" : "24px"} height={isMobileScreen ? "21px" : "24px"} fill='#EFEDE8'>
                  <use xlinkHref={sprite + "#icon-user" } />
              </svg></UserCircle></Link>
          </li>
            <li><svg width={isMobileScreen ? "24px" : "32px"} height={isMobileScreen ? "24px" : "32px"} fill='#EFEDE8'
              onClick={() => setIsOpen(!isOpen)}>
                  <use xlinkHref={sprite + "#icon-menu" } />
            </svg>
          </li>
        </NavigationList>
      </nav>

      <MobileMenu closeMenu={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      
    </MainDivLoggedIn > :
      <MainDiv>
        <svg width={isMobileScreen ? "82px" : "151px"} height={isMobileScreen ? "12px" : "17px"}>
                  <use xlinkHref={sprite + "#icon-Logo-1" } />
              </svg>
      </MainDiv>}
     </>)
 
};