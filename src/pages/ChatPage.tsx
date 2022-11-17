import { FC } from 'react';

import { Heading, VStack } from '@chakra-ui/react';

const ChatPage: FC = () => {
  return (
    <VStack py={4} textAlign="center">
      <Heading as="h1">Chat Page</Heading>
    </VStack>
  );
};

export default ChatPage;
