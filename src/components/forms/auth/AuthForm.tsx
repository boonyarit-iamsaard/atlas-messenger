import { ChangeEvent, FC, useState } from 'react';

import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

import AuthFormFooter from './AuthFormFooter';
import AuthFormHeader from './AuthFormHeader';

interface UserCredentials {
  username: string;
  password: string;
}

interface FormData extends UserCredentials {
  confirmPassword: string;
  displayName: string;
}

const defaultFormData: FormData = {
  confirmPassword: '',
  displayName: '',
  password: '',
  username: '',
};

const AuthForm: FC = () => {
  const [formMode, setFormMode] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState<FormData>({ ...defaultFormData });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log('formMode => ', formMode);
  console.log('formData => ', formData);

  return (
    <VStack spacing={4} py={4} maxW="lg" w="full">
      <AuthFormHeader />
      <VStack spacing={4} w="full">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            aria-label="Username"
            name="username"
            onChange={handleChange}
            type="text"
            value={formData.username}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            aria-label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={formData.password}
          />
        </FormControl>
        {formMode === 'register' && (
          <>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                aria-label="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                type="password"
                value={formData.confirmPassword}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Display Name</FormLabel>
              <Input
                aria-label="Display Name"
                name="displayName"
                onChange={handleChange}
                type="text"
                value={formData.displayName}
              />
            </FormControl>
          </>
        )}
        <Button
          colorScheme={formMode === 'login' ? 'teal' : 'blue'}
          type="submit"
          w="full"
        >
          {formMode === 'login' ? 'Login' : 'Register'}
        </Button>
        <Divider />
        <AuthFormFooter formMode={formMode} setFormMode={setFormMode} />
      </VStack>
    </VStack>
  );
};

export default AuthForm;
