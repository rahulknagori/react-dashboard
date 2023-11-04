import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Login from "../src/pages/Auth/Login/index";
import Home from "../src/pages/Home";
import MiniDrawer from "./components/Layout/MiniDrawer";
import Account from "./pages/Account";

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <MiniDrawer>
                <Home />
            </MiniDrawer>
          }
        />
        <Route
          path="/account"
          element={
            <MiniDrawer>
                <Account />
            </MiniDrawer>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AppRoutes;
