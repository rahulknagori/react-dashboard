import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#178288",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
  },
  typography: {
    h1: {
      fontSize: "6rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 300,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
