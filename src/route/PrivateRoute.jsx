import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom/dist';

export const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
