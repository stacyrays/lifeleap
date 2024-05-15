import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import { theme } from '../NavBar/NavBar';
import './Team.css';
import '../../App.css';

const Team = () => {
  return (
    <>
      <div className="header-image-river">
        <div className="header-text">
          <h1>Meet our team of <span className="header-text-italic">certified</span> specialists</h1>
          <ThemeProvider theme={theme}>
            <Stack gap={2} alignItems="center">
              <Button variant="contained" color="orange">
               Book Appointment
              </Button>
            </Stack>
          </ThemeProvider>
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
      <Services />

    </>
  );
}

export default Team;
