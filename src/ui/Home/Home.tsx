import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import { theme } from '../NavBar/NabBar';
import './Home.css';
import '../../App.css';

const Home = () => {
  return (
    <>
      <div className="header-image-home">
        <div className="header-text">
          <h1>Take the <span className="header-text-italic">faster</span> path healing method</h1>
          <ThemeProvider theme={theme}>
            <Stack gap={2} alignItems="center">
              <Button variant="contained" color="orange">
               Book Session
              </Button>
            </Stack>
          </ThemeProvider>
        </div>
      </div>
      <Services />
    </>
  );
}

export default Home;
