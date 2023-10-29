import "./App.css";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import MiniDrawer from "./components/Layout/Drawer";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
        <MiniDrawer />
      </Router>
    </>
  );
}

export default App;
