import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { useAuth } from './hooks/useAuth';
import {refreshUser} from "./redux/auth/operations"

import SharedLayout from 'components/SharedLayout/SharedLayout';

import ErrorPage from 'pages/ErrorPage/ErrorPage';

import {PrivateRoute} from './route/PrivateRoute';
import { RestrictedRoute } from './route/RestrictedRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserPage from './pages/UserPage/UserPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DairyPage from './pages/DairyPage/DairyPage';

function App() {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) :(  
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo='/profile' component={<RegisterPage />}/>} />
          <Route path="/login" element={<RestrictedRoute redirectTo='/profile' component={<LoginPage />}/>} />
            <Route path="/user" element={<PrivateRoute redirectTo="/login" component = {<UserPage/>} />}/>
            <Route path="/diary" element={<PrivateRoute redirectTo="/login" component = {<DairyPage/>} />}/>
            <Route path="/products" element={<PrivateRoute redirectTo="/login" component = {<ProductsPage/>} />}/>
            <Route path="/exercises" element={<PrivateRoute redirectTo="/login" component = {<ExercisesPage/>} />}/>
            <Route path="/profile" element={<PrivateRoute redirectTo="/login" component = {<ProfilePage/>} />}/>
            </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;



