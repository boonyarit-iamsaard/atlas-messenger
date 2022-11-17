import { FC } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from './components/layout';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './hooks/useAuth';
import ChatPage from './pages/ChatPage';
import EnterPage from './pages/EnterPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  // TODO: Try remove page redirect flickering
  if (!user && location.pathname !== '/enter') {
    // Redirect them to the /enter page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/enter" state={{ from: location }} replace />;
  } else if (user && location.pathname === '/enter') {
    // If the user is already logged in and they try to go to the /enter page,
    // redirect them to the home page instead.
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

const App: FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="/chat"
            element={
              <RequireAuth>
                <ChatPage />
              </RequireAuth>
            }
          />
          <Route
            path="/enter"
            element={
              <RequireAuth>
                <EnterPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
