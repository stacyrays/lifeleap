import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo} from './ui/images/lifeleap-logo.svg';
import NavBar from './ui/NavBar/NavBar';
import Home from './ui/Home/Home';
import Hypnotherapy from './ui/Hypnotherapy/Hypnotherapy';
import Team from './ui/Team/Team';
import Contact from './ui/Contact/Contact';

import './App.css';

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
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
