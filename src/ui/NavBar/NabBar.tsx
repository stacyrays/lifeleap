import {useState, useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';

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
          <div className="nav-bar-item">
            <Link to="/">Book Now</Link>
          </div>
          <div className="nav-bar-item">
            <Link to="/hypnotherapy">Hypnotherapy</Link>
          </div>
          <div className="nav-bar-item">
            <Link to="/river">Meet River</Link>
          </div>
          <div className="nav-bar-item">
            <Link to="/contact">Contact Us</Link>
          </div>
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
