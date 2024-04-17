import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./components/Signup";
import Notfound from "./components/Notfound";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Motive from "./components/Motive";
import VerifyMail from "./components/VerifyMail";
import VictimLogin from "./components/VictimLogin";
import VictimSignup from "./components/VictimSignup";
import VictimDashboard from "./components/VictimDashboard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/select-interest" element={<Motive />} />
        <Route path="/verify-mail" element={<VerifyMail />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
