import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout';
import EnterPage from './pages/EnterPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/atlas-messenger" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/atlas-messenger/enter" element={<EnterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
