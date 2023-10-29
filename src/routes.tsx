import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Login from "../src/pages/Auth/Login/index";
import Home from "../src/pages/Home";

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AppRoutes;
