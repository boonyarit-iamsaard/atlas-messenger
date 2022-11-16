import { FC } from 'react';

import { Heading, Text, VStack } from '@chakra-ui/react';

const HomePage: FC = () => {
  return (
    <VStack textAlign="center">
      <Heading as="h1">Welcome to Atlas Messenger</Heading>
      <Text fontSize="sm" color="gray.400">
        A real-time chat application built with React, TypeScript, Chakra UI,
        and MongoDB Atlas.
      </Text>
    </VStack>
  );
};

export default HomePage;
