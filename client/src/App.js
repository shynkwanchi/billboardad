import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import LoginForm from "./routes/LoginForm";
import SignupForm from "./routes/SignupForm";

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
