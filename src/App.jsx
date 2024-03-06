import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import ErrorPage from 'pages/ErrorPage/ErrorPage';

import PrivateRoute from './route/PrivateRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserPage from './pages/UserPage/UserPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DairyPage from './pages/DairyPage/DairyPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />}/> 
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/diary" element={<DairyPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            </Route>
            </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;



