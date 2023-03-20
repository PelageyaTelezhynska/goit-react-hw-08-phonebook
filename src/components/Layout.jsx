import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarStyled } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <div>
      <AppBarStyled />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
