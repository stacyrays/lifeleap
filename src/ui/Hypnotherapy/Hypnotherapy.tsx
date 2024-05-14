import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import './Hypnotherapy.css';

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

const Hypnotherapy = () => {
  return (
    <>
      <div className="header-image">
        <div className="header-text">
          <h1>What is <span className="header-text-italic">hypnotherapy</span>?</h1>
          <ThemeProvider theme={theme}>
            <Stack gap={2} alignItems="center">
              <Button variant="contained" color="orange">
               Book Appointment
              </Button>
            </Stack>
          </ThemeProvider>
        </div>
      </div>
      <div>*** Content for hypnotherapy ****</div>
      <Services />

    </>
  );
}

export default Hypnotherapy;
