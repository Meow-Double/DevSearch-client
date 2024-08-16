import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import { Layout } from './components';
import { HomePage, LoginPage, RegisterPage } from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={ROUTES.AUTH} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
