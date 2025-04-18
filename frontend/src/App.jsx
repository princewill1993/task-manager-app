import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/protected/LoginPage";
import RegisterPage from "./pages/protected/RegisterPage";
import UserProfile from "./pages/protected/UserProfile";

import ProtectedLayout from "./layout/ProtectedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/** Protected layout */}
      <Route element={<ProtectedLayout />}>
        <Route path="profile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
