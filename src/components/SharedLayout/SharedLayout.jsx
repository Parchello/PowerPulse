import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.Styles';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (<>
  <Header />
    <Container>
      <Toaster/>    
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  </>
  );
};

export default SharedLayout;
