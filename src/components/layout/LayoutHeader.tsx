import { FC } from 'react';

import { Button, Container, Grid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const LayoutHeader: FC = () => {
  return (
    <Grid as="header" alignItems="center">
      <Container
        alignItems="center"
        as="nav"
        display="flex"
        justifyContent="space-between"
        maxW="3xl"
      >
        <Button as={RouterLink} to="/" variant="ghost">
          Atlas Messenger
        </Button>
        <Button as={RouterLink} to="/enter" variant="ghost">
          Login
        </Button>
      </Container>
    </Grid>
  );
};

export default LayoutHeader;
