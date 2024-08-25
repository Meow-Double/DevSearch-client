import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PARAMS, ROUTES } from './configs/routes';
import { Layout } from './components';
import { HomePage, LoginPage, NotFoundPage, ProfilePage, RegisterPage, ResumePage } from '@/pages';
import { useEffect } from 'react';
import { getAuth } from '@/api/requests/user/auth';
import { useUser } from '@/pages/AuthPages/store/store';

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
