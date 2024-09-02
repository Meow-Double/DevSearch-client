import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PARAMS, ROUTES } from './configs/routes';
import { Layout } from './components';
import {
  CreateWorkPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ResponsesPage,
  ResumePage,
  SettingsPage,
  WorkCardPage
} from '@/pages';
import { useEffect } from 'react';
import { getAuth } from '@/api/requests';
import { useUser } from '@/pages/AuthPages/store';

const App = () => {
  const { isAuth, setUser, setIsAuth } = useUser((state) => state);

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      setIsAuth(true);
      getAuth({ config: { headers: { Authorization: token } } }).then((res) => setUser(res.data));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {!isAuth ? (
          <>
            <Route path={ROUTES.AUTH} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.HOME} element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path={ROUTES.RESUME} element={<Layout />}>
              <Route index element={<NotFoundPage />} />
            </Route>
          </>
        ) : (
          <>
            <Route path={ROUTES.HOME} element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path={ROUTES.PROFILE} element={<Layout />}>
              <Route index element={<ProfilePage />} />
            </Route>
            <Route path={ROUTES.SETTINGS} element={<Layout />}>
              <Route index element={<SettingsPage />} />
            </Route>
            <Route path={ROUTES.RESPONSES} element={<Layout />}>
              <Route index element={<ResponsesPage />} />
            </Route>
            <Route path={ROUTES.WORKCARD} element={<Layout />}>
              <Route index element={<WorkCardPage />} />
            </Route>
            <Route path={ROUTES.CREATEWORK} element={<Layout />}>
              <Route index element={<CreateWorkPage />} />
            </Route>
            <Route path={ROUTES.RESUME} element={<Layout />}>
              <Route index element={<ResumePage />} />
              <Route path={PARAMS.ID} element={<ResumePage />} />
            </Route>
            <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
