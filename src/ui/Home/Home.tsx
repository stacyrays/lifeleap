import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import './Home.css';

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
