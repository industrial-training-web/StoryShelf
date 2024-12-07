import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../firebaseprovider/FirebaseProvider';

interface PrivateRouteProps {
  element: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useContext(AuthContext) || {};

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return <>{element} </>;
};
