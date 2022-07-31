import React from "react";
import {Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginSignup/LoginForm";
import SignupForm from "./components/LoginSignup/SignupForm";
import Main from "./components/Main";
import SignupTest from "./components/LoginSignup/SignupTest";

function App() {

  const user = localStorage.getItem("token");

  return (
    <div>
      <Navigation />
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/test" element={<SignupTest />} />
      </Routes>
    </div>
  );
}

export default App;
