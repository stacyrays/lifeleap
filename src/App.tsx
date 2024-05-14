import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/system';
import { ReactComponent as Logo} from './ui/images/lifeleap-logo.svg';
import NavBar from './ui/NavBar/NabBar';
import Services from './ui/Services/Services';
import './App.css';

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
    blue: Palette['secondary'];
  }

  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
    blue?: PaletteOptions['secondary'];
  }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    orange: true;
    blue: true;
  }
}

const theme = createTheme({
  palette: {
    orange: {
      main: '#FF4E02',
      light: '#FF611D',
      dark: '#D03F01',
      contrastText: '#FFFFFF',
    },
    blue: {
      main: '#0285FF',
      light: '#2B99FF',
      dark: '#006ED4',
      contrastText: '#FFFFFF',
    },
  },
});

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo"><Logo /></div>
        <NavBar />
      </header>
      <div className="header-image">
        <div className="header-text">
          <h1>Take the faster path healing method</h1>
          {/* <Button variant="contained" color="ochre">Book Appointment</Button> */}
          <ThemeProvider theme={theme}>
            <Stack gap={2} alignItems="center">
              <Button variant="contained" color="orange">
               Book Appointment
              </Button>
            </Stack>
          </ThemeProvider>
        </div>
      </div>
      <Services />
    </div>
  );
}

export default App;
