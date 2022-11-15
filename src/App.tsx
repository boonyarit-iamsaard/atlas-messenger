import { FC } from 'react';

import { Container, Heading, Text, VStack } from '@chakra-ui/react';

const App: FC = () => {
  return (
    <Container maxW="3xl">
      <VStack spacing={4} py={4}>
        <Heading>Chat App</Heading>
        <Text>
          This is a real-time chat application built with React, TypeScript, and
          MongoDB Atlas.
        </Text>
      </VStack>
    </Container>
  );
};

export default App;
