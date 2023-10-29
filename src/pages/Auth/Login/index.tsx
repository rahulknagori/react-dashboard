import { Button, Box, Stack, Typography, Checkbox } from "@mui/material";
import {
  AuthCard,
  AuthTextField,
  AuthContainer,
  RememberMeFormLabel,
} from "../Auth.style";

const Login: React.FC = () => {
  return (
    <AuthContainer>
      <Box sx={{ pt: "12%" }}>
        <AuthCard>
          <Stack>
            <Typography fontWeight={600} align="center" variant={"h6"}>
              Login To Your Account
            </Typography>
            <AuthTextField
              size="small"
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
            />
            <AuthTextField
              required
              size="small"
              id="outlined-disabled"
              label="Password"
              defaultValue=""
            />
            <RememberMeFormLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />

            <Button variant="contained">Login</Button>
          </Stack>
        </AuthCard>
      </Box>
    </AuthContainer>
  );
};

export default Login;
