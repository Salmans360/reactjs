import { Navigate, useOutlet } from 'react-router-dom';
import { UseAuth } from '../Auth/Auth';

const PublicLayout = () => {
  const { user } = UseAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to='/dashboard' replace />;
  }

  return outlet;
};
export default PublicLayout;
