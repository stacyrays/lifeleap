import {Link} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Stack} from '@mui/system';
import Services from '../Services/Services';
import {theme} from '../NavBar/NavBar';
import './Home.css';
import '../../App.css';

const Home = () => {
  return (
    <>
      <div className="header-image-home">
        <div className="header-text">
          <h1>Take the <span className="header-text-italic">faster</span> path healing method</h1>
          {/* <div className="sub-header">We can help with hypnotherapy techniques</div> */}
          <ThemeProvider theme={theme}>
            <Stack gap={2} alignItems="center">
              <Link to="/helps">
                <Button variant="contained" color="orange">
                  View Services
                </Button>
              </Link>
            </Stack>
          </ThemeProvider>
        </div>
      </div>
      <div className="content-container">
        <div className="content-main">
          <div className="content-main-left">
            <div className="sub-header-text">Curious about hypnotherapy?</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus mauris, tristique mollis nulla eu, viverra fringilla dolor. Sed venenatis ligula et sem congue, a tempor sem luctus. Aliquam ornare feugiat efficitur. Nunc in tempor metus. Ut varius eu felis vel ullamcorper. Integer et pharetra purus. Maecenas a tortor ligula. Phasellus finibus est eu vehicula suscipit. Nulla congue eleifend ante, sed ultrices justo consequat vel. Duis interdum nec orci a fermentum. In hac habitasse platea dictumst. Integer a purus cursus, congue erat at, maximus augue. Donec euismod tincidunt lorem, quis rhoncus est ultricies quis. Sed sollicitudin sodales augue ac pharetra. 
            </p>
          </div>
          <div className="content-main-right">
            <img src="https://www.verywellmind.com/thmb/39_t3xNP_43YUiUnyRVAtqfckBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/positive-blonde-middle-aged-woman-psychologist-talking-to-girl-patient-1213531990-745e910347594bf0a0569e7e1b908105.jpg" width="100%" height="auto"/>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
}

export default Home;
