import { FC } from 'react';

import { Container, Grid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';

const Layout: FC = () => {
  return (
    <Grid templateRows="4rem auto 4rem" minH="100vh">
      <LayoutHeader />
      <Grid as="main">
        <Container
          as="section"
          display="grid"
          justifyContent="center"
          maxW="3xl"
        >
          <Outlet />
        </Container>
      </Grid>
      <LayoutFooter />
    </Grid>
  );
};

export default Layout;
