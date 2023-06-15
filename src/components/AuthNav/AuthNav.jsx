
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
   const navigate = useNavigate();
  return (
    <div className={css.authNav}>
      
      <Button
        variant="contained"
        endIcon={<HowToRegIcon />}
        onClick={() => navigate('/register')}
      >
        Register
      </Button>
      <Button
        variant="contained"
        endIcon={<LoginIcon />}
        onClick={() => navigate('/login')}
      >
        Log In
      </Button>
    </div>
  );
};
