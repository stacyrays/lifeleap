import {Link} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import ServicePanels from '../ServicePanels/ServicePanels';
import { theme } from '../NavBar/NavBar';
import './Team.css';
import '../../App.css';

const Team = () => {
  return (
    <>
      <div className="header-image-river">
        <div className="header-text">
          <h1>Team of <em>certified</em> specialists</h1>
        </div>
      </div>
      <div className="content-container">
        <div className="content-main">
          <div className="content-main-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus mauris, tristique mollis nulla eu, viverra fringilla dolor. Sed venenatis ligula et sem congue, a tempor sem luctus. Aliquam ornare feugiat efficitur. Nunc in tempor metus. Ut varius eu felis vel ullamcorper. Integer et pharetra purus. Maecenas a tortor ligula. Phasellus finibus est eu vehicula suscipit. Nulla congue eleifend ante, sed ultrices justo consequat vel. Duis interdum nec orci a fermentum. In hac habitasse platea dictumst. Integer a purus cursus, congue erat at, maximus augue. Donec euismod tincidunt lorem, quis rhoncus est ultricies quis. Sed sollicitudin sodales augue ac pharetra. 
            </p>
          </div>
          <div className="content-main-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus mauris, tristique mollis nulla eu, viverra fringilla dolor. Sed venenatis ligula et sem congue, a tempor sem luctus. Aliquam ornare feugiat efficitur. Nunc in tempor metus. Ut varius eu felis vel ullamcorper. Integer et pharetra purus. Maecenas a tortor ligula. Phasellus finibus est eu vehicula suscipit. Nulla congue eleifend ante, sed ultrices justo consequat vel. Duis interdum nec orci a fermentum. In hac habitasse platea dictumst. Integer a purus cursus, congue erat at, maximus augue. Donec euismod tincidunt lorem, quis rhoncus est ultricies quis. Sed sollicitudin sodales augue ac pharetra. 
            </p>
          </div>
        </div>
      </div>
      <ServicePanels />

    </>
  );
}

export default Team;
