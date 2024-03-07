import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.Styles';
import {Toaster} from "react-dom"

const SharedLayout = () => {
  return (<>
  <Header />
    <Container>    
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>

    <Toaster/>
  </>
  );
};

export default SharedLayout;
