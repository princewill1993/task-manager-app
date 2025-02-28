import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/protected/LoginPage";
import RegisterPage from "./pages/protected/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
