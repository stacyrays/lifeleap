import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import './River.css';

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

const River = () => {
  return (
    <>
      <div className="header-image-river">
        <div className="header-text">
          <h1>Who is <span className="header-text-italic">River</span>?</h1>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus mauris, tristique mollis nulla eu, viverra fringilla dolor. Sed venenatis ligula et sem congue, a tempor sem luctus. Aliquam ornare feugiat efficitur. Nunc in tempor metus. Ut varius eu felis vel ullamcorper. Integer et pharetra purus. Maecenas a tortor ligula. Phasellus finibus est eu vehicula suscipit. Nulla congue eleifend ante, sed ultrices justo consequat vel. Duis interdum nec orci a fermentum. In hac habitasse platea dictumst. Integer a purus cursus, congue erat at, maximus augue. Donec euismod tincidunt lorem, quis rhoncus est ultricies quis. Sed sollicitudin sodales augue ac pharetra. Nulla vitae suscipit odio. Suspendisse in libero auctor, ornare nisl id, fringilla neque. Donec purus velit, efficitur at est at, sodales pulvinar turpis. In pulvinar augue ac magna faucibus, sed venenatis nunc placerat. Donec convallis, ligula sed pellentesque mollis, nulla enim ornare velit, quis volutpat arcu velit ac urna. Curabitur viverra, est vel convallis consectetur, massa nibh gravida lectus, luctus porta dui sapien sed nunc. Integer ligula metus, molestie sit amet fringilla eget, porta ut ipsum. Pellentesque id molestie turpis.
          </p>
        </div>
      </div>
      <Services />

    </>
  );
}

export default River;
