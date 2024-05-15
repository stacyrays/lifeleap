import {useState, useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';

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

export const theme = createTheme({
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

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  const menu = () => {
    if (width >= 700){
      return (
        <>
          <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
              <Link to="/book"><Button color="blue" variant="text">Book Session</Button></Link>
              <Link to="/hypnotherapy"><Button color="blue" variant="text">Hypnotherapy</Button></Link>
              <Link to="/river"><Button color="blue" variant="text">Meet the Team</Button></Link>
              <Link to="/contact"><Button color="blue" variant="text">Contact Us</Button></Link>
            </Stack>
          </ThemeProvider>
        </>
      );
    } else {
      // return (<div style={{color: 'red'}}>hamburger</div>);
      return (<MenuIcon sx={{color: '#0285FF'}} />);
    }
  }

  return (<div className="nav-bar">{menu()}<Outlet /></div>);
}

export default NavBar;
