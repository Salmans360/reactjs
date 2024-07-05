import { useOutlet } from 'react-router-dom';
import { AuthProvider } from '../Auth/Auth';

export const AuthLayout = () => {
  const outlet = useOutlet();

  return <AuthProvider>{outlet}</AuthProvider>;
};
