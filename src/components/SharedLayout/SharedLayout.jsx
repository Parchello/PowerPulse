import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.Styles';
import { Toaster } from 'react-hot-toast';
// import {Toaster} from "react-dom"

const SharedLayout = () => {
  return (<>
  <Header />
  <Toaster/> 
    <Container>   
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    {/* <Toaster/> */}
    </Container>
  </>
  );
};

export default SharedLayout;
