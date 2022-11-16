import { FC } from 'react';

import { Container, Grid, Link } from '@chakra-ui/react';

const LayoutFooter: FC = () => {
  return (
    <Grid as="footer" alignItems="center">
      <Container color="gray.400" fontSize="sm" maxW="3xl" textAlign="center">
        <Link
          href="https://dev.to/devteam/announcing-the-mongodb-atlas-hackathon-2022-on-dev-2107"
          target="_blank"
        >
          {' '}
          MongoDB Atlas Hackathon 2022 on DEV
        </Link>
        . Coded by
        <Link href="https://github.com/boonyarit-iamsaard" target="_blank">
          {' '}
          Boonyarit Iamsa-ard
        </Link>
        .
      </Container>
    </Grid>
  );
};

export default LayoutFooter;
