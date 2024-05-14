import {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import EmailIcon from '@mui/icons-material/Email';
import './Services.css';


// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
    blue: Palette['secondary'];
    white: Palette['secondary'];
  }

  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
    blue?: PaletteOptions['secondary'];
    white?: PaletteOptions['secondary'];

  }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    orange: true;
    blue: true;
    white: true;
  }
}

const theme = createTheme({
  palette: {
    orange: {
      main: '#FF4E02',
      light: '#FF611D',
      dark: '#D03F01',
      contrastText: '#FFF',
    },
    blue: {
      main: '#0285FF',
      light: '#2B99FF',
      dark: '#006ED4',
      contrastText: '#FFF',
    },
    white: {
      main: '#FFF',
      light: '#FFF',
      dark: '#FFF',
      contrastText: '#FFF',
    },
  },
});

const Services = () => {
  const [isHypnoHovered, setIsHypnoHovered] = useState(false);
  const [isMeditationHovered, setIsMeditationHovered] = useState(false);
  const [isEmailHovered, setEmailHovered] = useState(false);
  
  return (
    <>
      <div className="service-panel-section">
        <div className="sub-header-text"><h2>Services</h2></div>
        <div className="service-panel-container">
          <div className="service-panel-item"
            onMouseEnter={() => setIsHypnoHovered(true)}
            onMouseLeave={() => setIsHypnoHovered(false)}
          >
            <SpatialAudioIcon 
              className={isHypnoHovered ? 'service-panel-icon' : 'service-panel-icon-hovered'}
              sx={{height: '50px', width: '50px'}}
            />
            <div className="service-text">Hypnotherapy</div>
            <div className={isHypnoHovered ? 'service-button-hovered' : 'service-button'}>Learn More</div>
          </div>
          <div
            className="service-panel-item"
            onMouseEnter={() => setIsMeditationHovered(true)}
            onMouseLeave={() => setIsMeditationHovered(false)}
          >
            <SelfImprovementIcon 
              className={isMeditationHovered ? 'service-panel-icon' : 'service-panel-icon-hovered'}
              sx={{height: '50px', width: '50px'}} />
            <div className="service-text">Meditation Tutorials</div>
            <div className={isMeditationHovered ? 'service-button-hovered' : 'service-button'}>Learn More</div>
          </div>
          <div className="service-panel-item"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
          >
            <EmailIcon
              className={isEmailHovered ? 'service-panel-icon' : 'service-panel-icon-hovered'}
              sx={{height: '50px', width: '50px'}} />
            <div className="service-text">Free E-Gift!</div>
            <div className={isEmailHovered ? 'service-button-hovered' : 'service-button'}>Learn More</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;