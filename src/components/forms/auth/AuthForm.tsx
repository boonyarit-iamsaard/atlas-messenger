import { ChangeEvent, FC, useState } from 'react';

import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import AuthFormFooter from './AuthFormFooter';
import AuthFormHeader from './AuthFormHeader';

type FormData = UserData & { confirmPassword: string };

const defaultFormData: FormData = {
  confirmPassword: '',
  displayName: '',
  password: '',
  username: '',
  id: '',
};

const AuthForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({ ...defaultFormData });
  const [formMode, setFormMode] = useState<'login' | 'register'>('login');
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const { setUser } = useAuth();
  const [storedUsers, setStoredUsers] = useLocalStorage<UserData[]>(
    'users',
    []
  );
  const [, setCurrentUser] = useLocalStorage<User | null>('currentUser', null);

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleError = (title: string, description: string) => {
    toast({
      title,
      description,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  const handleLogin = () => {
    const { username, password } = formData;
    const user = storedUsers.find(
      (user: UserData) =>
        user.username === username && user.password === password
    );
    if (user) {
      const { id, displayName, username } = user;
      setCurrentUser({ id, displayName, username });
      setUser({ id, displayName, username });
      navigate(from, { replace: true });
    } else {
      handleError(
        'Invalid credentials',
        'Please check your username and password'
      );
    }
  };

  const handleRegister = () => {
    const { confirmPassword, displayName, password, username } = formData;
    if (password !== confirmPassword) {
      handleError('Passwords do not match', 'Please check your passwords');
      return;
    } else {
      const user = storedUsers.find(
        (user: UserData) => user.username === username
      );
      if (user) {
        handleError(
          'Username already exists',
          'Please choose another username or login'
        );
        return;
      } else {
        const id = Math.random().toString();
        const newUser: UserData = {
          displayName,
          id,
          password,
          username,
        };
        setStoredUsers([...storedUsers, newUser]);
        setCurrentUser({ id, displayName, username });
        setUser({ id, displayName, username });
        navigate('/', { replace: true });
      }
    }
  };

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
            required
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
            required
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
                required
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
                required
              />
            </FormControl>
          </>
        )}
        <Button
          colorScheme={formMode === 'login' ? 'teal' : 'blue'}
          type="submit"
          w="full"
          onClick={formMode === 'login' ? handleLogin : handleRegister}
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
