import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/system';
// import { Typography } from '@mui/material';
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import EmailIcon from '@mui/icons-material/Email';
import './Services.css';


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

const Services = () => {
  return (
    <>
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
      <div className="service-panel-section">
        <div className="sub-header-text"><h2>Services</h2></div>
        <div className="service-panel-container">
          <div className="service-panel-item">
            <SpatialAudioIcon sx={{color:'#0285FF', height: '50px', width: '50px'}} />
            <div className="service-text">Hypnotherapy</div>
            <ThemeProvider theme={theme}>
              <Stack gap={2} alignItems="center">
              <Button variant="outlined" color="blue" >
                  Learn More
                </Button>
              </Stack>
            </ThemeProvider>
          </div>
          <div className="service-panel-item">
            <SelfImprovementIcon sx={{color:'#0285FF', height: '50px', width: '50px'}} />
            <div className="service-text">Meditation Tutorials</div>
            <ThemeProvider theme={theme}>
              <Stack gap={2} alignItems="center">
                <Button variant="outlined" color="blue">
                  Learn More
                </Button>
              </Stack>
            </ThemeProvider>
          </div>
          <div className="service-panel-item">
            <EmailIcon color="secondary" sx={{color:'#0285FF', height: '50px', width: '50px'}} />
            <div className="service-text">Free E-Gift!</div>
            <ThemeProvider theme={theme}>
              <Stack gap={2} alignItems="center">
              <Button variant="outlined" color="blue">
                  Learn More
                </Button>
              </Stack>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;