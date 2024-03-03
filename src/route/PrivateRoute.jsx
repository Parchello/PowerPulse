// import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
