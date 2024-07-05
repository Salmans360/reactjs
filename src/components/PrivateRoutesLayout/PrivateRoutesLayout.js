import { Navigate, Outlet } from 'react-router-dom';
import { UseAuth } from '../Auth/Auth';

const PrivateRoutesLayout = () => {
  const { user } = UseAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to='/' />;
  }
  return <Outlet />;
};
export default PrivateRoutesLayout;
