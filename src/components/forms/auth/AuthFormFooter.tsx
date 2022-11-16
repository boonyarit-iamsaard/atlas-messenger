import { FC } from 'react';

import { Button, Text } from '@chakra-ui/react';

interface AuthFormFooterProps {
  formMode: 'login' | 'register';
  setFormMode: (formMode: 'login' | 'register') => void;
}

const AuthFormFooter: FC<AuthFormFooterProps> = ({ formMode, setFormMode }) => {
  return (
    <Text>
      {formMode === 'login' ? 'Need an account?' : 'Already have an account?'}
      <Button
        colorScheme={formMode === 'login' ? 'teal' : 'blue'}
        ml={1}
        onClick={() => setFormMode(formMode === 'login' ? 'register' : 'login')}
        variant="link"
      >
        {formMode === 'login' ? 'Register' : 'Login'}
      </Button>
    </Text>
  );
};

export default AuthFormFooter;
