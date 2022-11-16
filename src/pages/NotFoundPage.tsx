import { FC } from 'react';

import { Heading, VStack } from '@chakra-ui/react';

const NotFoundPage: FC = () => {
  return (
    <VStack textAlign="center">
      <Heading as="h1">Page Not Found</Heading>
    </VStack>
  );
};

export default NotFoundPage;
