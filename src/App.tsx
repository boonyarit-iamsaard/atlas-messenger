import { FC } from 'react';

import { Container, Heading, Text, VStack } from '@chakra-ui/react';

const App: FC = () => {
  return (
    <Container as="section" display="grid" placeItems="center" maxW="3xl">
      <VStack spacing={4} py={4}>
        <Heading as="h1">Atlas Messenger</Heading>
        <Text>
          This is a real-time chat application built with React, TypeScript,
          Chakra UI, and MongoDB Atlas.
        </Text>
      </VStack>
    </Container>
  );
};

export default App;
