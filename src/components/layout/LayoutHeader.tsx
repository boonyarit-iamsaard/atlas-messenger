import { FC } from 'react';

import { Container, Grid, Text } from '@chakra-ui/react';

const LayoutHeader: FC = () => {
  return (
    <Grid as="header" alignItems="center">
      <Container as="nav" display="flex" maxW="3xl">
        <Text as="b">Atlas Messenger</Text>
      </Container>
    </Grid>
  );
};

export default LayoutHeader;
