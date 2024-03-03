import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';

import sprite from "../../../assets/sprite.svg"

import { MainDiv, LogOutDiv, CloseBtn } from './MobileMenu.Styled';
import { UserNav } from '../UserNav/UserNav';
import { LogOut } from '../LogOut/LogOut';




export const MobileMenu = ({ closeMenu, isOpen }) => {

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  let location = useLocation();

  useEffect(() => {
    if (isOpen) {
       closeMenu();
    }
   
  }, [location]);

  return (
    <Slide direction="down" in={isOpen} easing={{ enter: 'cubic-bezier(.17,.67,.83,.67)', exit: 'cubic-bezier(.17,.67,.83,.67)' }}>
    <MainDiv>
      <CloseBtn width={isMobileScreen ? "24px" : "32px"} height={isMobileScreen ? "24px" : "32px"} stroke='#EFEDE8'
      onClick={closeMenu}>
          <use xlinkHref={sprite + "#icon-close"} />
          </CloseBtn>
      <UserNav/>
        <LogOutDiv>
          <LogOut color="#EFEDE8"/>
      </LogOutDiv>
    </MainDiv>
  </Slide>
  )
}