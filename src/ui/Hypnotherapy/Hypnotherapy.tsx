import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import { theme } from '../NavBar/NabBar';
import './Hypnotherapy.css';
import '../../App.css';

const Hypnotherapy = () => {
  return (
    <>
      <div className="header-image-hypnotherapy">
        <div className="header-text">
          <h1>What is <span className="header-text-italic">hypnotherapy</span>?</h1>
          <ThemeProvider theme={theme}>
            <Stack gap={2} alignItems="center">
              <Button variant="contained" color="orange">
               Book Session
              </Button>
            </Stack>
          </ThemeProvider>
        </div>
      </div>
      <div className="content-container">
        <div className="content-main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus mauris, tristique mollis nulla eu, viverra fringilla dolor. Sed venenatis ligula et sem congue, a tempor sem luctus. Aliquam ornare feugiat efficitur. Nunc in tempor metus. Ut varius eu felis vel ullamcorper. Integer et pharetra purus. Maecenas a tortor ligula. Phasellus finibus est eu vehicula suscipit. Nulla congue eleifend ante, sed ultrices justo consequat vel. Duis interdum nec orci a fermentum. In hac habitasse platea dictumst. Integer a purus cursus, congue erat at, maximus augue. Donec euismod tincidunt lorem, quis rhoncus est ultricies quis. Sed sollicitudin sodales augue ac pharetra. Nulla vitae suscipit odio. Suspendisse in libero auctor, ornare nisl id, fringilla neque. Donec purus velit, efficitur at est at, sodales pulvinar turpis. In pulvinar augue ac magna faucibus, sed venenatis nunc placerat. Donec convallis, ligula sed pellentesque mollis, nulla enim ornare velit, quis volutpat arcu velit ac urna. Curabitur viverra, est vel convallis consectetur, massa nibh gravida lectus, luctus porta dui sapien sed nunc. Integer ligula metus, molestie sit amet fringilla eget, porta ut ipsum. Pellentesque id molestie turpis.
          </p>
        </div>
      </div>
      <Services />

    </>
  );
}

export default Hypnotherapy;
