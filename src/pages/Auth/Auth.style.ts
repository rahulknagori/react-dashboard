import { Box, styled, TextField, FormControlLabel } from "@mui/material";

const AuthContainer = styled(Box)(({}) => ({
  backgroundColor: "#178288",
  width: "100%",
  height: "100vh",
}));

const AuthCard = styled(Box)(({ theme }) => ({
  minWidth: "20rem",
  maxWidth: "25rem",
  margin: "0 auto",
  padding: "2rem",
  borderRadius: "0.4rem",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  background: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    minWidth: "80%",
  },
}));

const AuthTextField = styled(TextField)(() => ({
  marginTop: "1rem",
}));

const RememberMeFormLabel = styled(FormControlLabel)(() => ({
  fontWeight: 600,
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  ".MuiFormControlLabel-label": {
    fontSize: "16px",
  },
}));

export { AuthCard, AuthTextField, AuthContainer, RememberMeFormLabel };
