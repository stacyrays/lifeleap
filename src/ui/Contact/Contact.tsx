import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Services from '../Services/Services';
import { theme } from '../NavBar/NavBar';
import './Contact.css';
import '../../App.css';

const Contact = () => {

  const handleSubmit = () => {
    console.log('send question data');
  }
  return (
    <>
      <div className="header-image-hypnotherapy">
        <div className="header-text">
          <h1>Contact us today with any <span className="header-text-italic">questions</span></h1>
        </div>
      </div>
      <div className="content-container">
        <div className="content-main">
          <div className="content-main-left">
          <ThemeProvider theme={theme}>
            <Box
              component="form"
              noValidate
              sx={{
                display: 'grid',
                gridTemplateColumns: { med: '2fr 2fr' },
                gap: 2,
              }}
            >
              <FormControl>
                <TextField
                  helperText="Please enter your name"
                  id="demo-helper-text-misaligned"
                  label="Name"
                  sx={{marginBottom: '10px'}}
                />
                <TextField
                  helperText="Please enter your email"
                  id="demo-helper-text-misaligned"
                  label="Email"
                  sx={{marginBottom: '10px'}}
                />
                <TextField
                  helperText="Please enter your question"
                  id="demo-helper-text-misaligned"
                  label="Question"
                  sx={{marginBottom: '10px'}}
                />
                {/* <TextField id="demo-helper-text-misaligned-no-helper" label="Name" /> */}
              </FormControl>
              <Button variant="contained" color="blue" onClick={handleSubmit}>Send Message</Button>
            </Box>
          </ThemeProvider>
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

export default Contact;
