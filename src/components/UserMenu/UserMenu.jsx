import axios from 'axios';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.thunk';

import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import css from './UserMenu.module.css'
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.wrapper}>
      {/* {user.name} */}
      <p className={css.username}>Welcome, {user.email}</p>

      
      <Button
        onClick={() => {
          console.log(axios.defaults.headers.common.Authorization);
          dispatch(logOut());
        }}
        variant="contained"
        endIcon={<LogoutIcon />}
      >
        logout
      </Button>
    </div>
  );
}