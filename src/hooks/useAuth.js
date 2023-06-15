import { useSelector } from 'react-redux';
import { setIsLoggedIn, setIsRefreshing, setUser } from 'redux/auth/authSlice';

export const useAuth = () => {
  const isLoggedIn = useSelector(setIsLoggedIn);
  const isRefreshing = useSelector(setIsRefreshing);
  const user = useSelector(setUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
