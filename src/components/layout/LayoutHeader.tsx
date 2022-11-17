import { FC } from 'react';

import { Button, Container, Grid, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const LayoutHeader: FC = () => {
  const { user, setUser } = useAuth();
  const [, setCurrentUser] = useLocalStorage<User | null>('currentUser', null);

  const handleLogout = () => {
    setCurrentUser(null);
    setUser(null);
  };

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
        {user && (
          <HStack spacing={2}>
            <Button as={RouterLink} to="/chat" variant="ghost">
              Chat
            </Button>
            <Button onClick={handleLogout} variant="ghost">
              Logout
            </Button>
          </HStack>
        )}
      </Container>
    </Grid>
  );
};

export default LayoutHeader;
