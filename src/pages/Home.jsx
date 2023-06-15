import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';
const styles = {
  container: {
    minHeight: 'calc(100vh - 350px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  authNav: {
    display: 'flex',
    gap: '15px',
  },
  span: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: '22px 0',
  },
};

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h1>Welcome to PhoneBook App</h1>
      <img
        src="https://www.seekpng.com/png/full/20-202225_phone-book-icon-png.png"
        alt="Logo"
        height="300"
      />

      <span style={styles.span}>
        Chose the variant
        <div style={styles.authNav}>
          <Button
            variant="contained"
            endIcon={<LoginIcon />}
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
        </div>
        or{' '}
        <Button
          variant="contained"
          endIcon={<HowToRegIcon />}
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
        new account.
      </span>
    </div>
  );
};

export default HomePage;
