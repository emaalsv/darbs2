import { createTheme } from '@mui/material';
import { grey, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue
    },
    secondary: {
      default: grey[200],
    },
  },
});

export default theme;
