import {Link} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Stack} from '@mui/system';
import ServicePanels from '../ServicePanels/ServicePanels';
import {theme} from '../NavBar/NavBar';
import './Home.css';
import '../../App.css';

const Home = () => {
  return (
    <>
      <div className="header-image-home">
        <div className="header-text">
          <div className='header-smaller-text'>The <em>faster</em> path healing method with</div>
          <h1>Neuro Linguistic Programming</h1>
          <ThemeProvider theme={theme}>
            <Stack gap={2} alignItems="center">
              <Link to="/services">
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
            <div className="sub-header-text">What is NLP?</div>
            <p>
              NLP stands for Neuro Linguistic Programming and is a tool for repatterning your thoughts on a deep and unconscious level. It allows you to create new behaviors and new strategies for navigating your world. By negotiating with the unconscious mind, rapid or instantaneous changes are generated. By understanding how you make a map of your particular reality, a skilled NLP practitioner can shift you from your present state to one that allows you to easily change your patterns and behaviors. 
            </p>
            <div className="sub-header-text">What is Hypnosis?</div>
            <p>
              Hypnosis refers to an altered state of consciousness. You experience this all the time - have you ever found yourself arriving at your destination but don’t remember the drive? Or zoning out during a tv show or lecture? This is a hypnotic state where your conscious mind drifts, and your unconscious mind can move freely and create new connections, much like a dream state.

              In the hands of a skilled hypnotist, you can be guided into a deeply relaxed state, allowing you to rest your conscious mind and make changes at a deep level using NLP.
            </p>
          </div>
          <div className="content-main-right">
            <img src="https://www.verywellmind.com/thmb/39_t3xNP_43YUiUnyRVAtqfckBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/positive-blonde-middle-aged-woman-psychologist-talking-to-girl-patient-1213531990-745e910347594bf0a0569e7e1b908105.jpg" width="100%" height="auto"/>
          </div>
        </div>
      </div>
      <ServicePanels />
    </>
  );
}

export default Home;
