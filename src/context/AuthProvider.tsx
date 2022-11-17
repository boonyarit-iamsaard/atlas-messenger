import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

interface AuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  // TODO: Research how to type this better
  setUser: () => undefined,
  // TODO: Imprement login, register, and logout
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentUser] = useLocalStorage<User | null>('currentUser', null);

  useEffect(() => {
    console.log('currentUser => ', currentUser);
    setUser(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
