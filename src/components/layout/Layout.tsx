import { Grid } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Grid templateRows="4rem auto 4rem" minH="100vh">
      <LayoutHeader />
      <Grid as="main">{children}</Grid>
      <LayoutFooter />
    </Grid>
  );
};

export default Layout;
