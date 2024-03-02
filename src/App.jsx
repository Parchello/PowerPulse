import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import ErrorPage from 'pages/ErrorPage/ErrorPage';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
// import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
export default App;
