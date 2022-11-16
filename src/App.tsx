import { FC } from 'react';

import { Container } from '@chakra-ui/react';

import { AuthForm } from './components/forms/auth';

const App: FC = () => {
  return (
    <Container as="section" display="grid" justifyContent="center" maxW="3xl">
      <AuthForm />
    </Container>
  );
};

export default App;
