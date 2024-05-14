import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactComponent as Logo} from './ui/images/lifeleap-logo.svg';
import NavBar from './ui/NavBar/NabBar';
import Home from './ui/Home/Home';
import River from './ui/River/River';
import './App.css';
import Hypnotherapy from './ui/Hypnotherapy/Hypnotherapy';

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
        <Link to="/">
          <div className="app-logo">
            <Logo />
          </div>
        </Link>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hypnotherapy" element={<Hypnotherapy />} />
        <Route path="/river" element={<River />} />
          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
