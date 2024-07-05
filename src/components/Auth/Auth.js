import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const keyName = 'user-token';

  const defaultValue = localStorage.getItem(keyName) || null;
  const navigate = useNavigate();

  const login = async (data) => {
    localStorage.setItem(keyName, JSON.stringify(data));
    navigate('/dashboard', { replace: true });
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider
      value={{
        user: defaultValue,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
