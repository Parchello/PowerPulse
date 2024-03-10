// // import { useState } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// export default function PrivateRoute() {
//   // const [isAuthenticated, setIsAuthenticated] = useState(true);
//   const isAuthenticated = true;
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// }
import { useAuth } from "../hooks/useAuth";
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
