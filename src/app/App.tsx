import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import { Layout } from './components';
import { HomePage } from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
