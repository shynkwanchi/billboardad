import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import LoginForm from "./routes/LoginForm";
import SignupForm from "./routes/SignupForm";
import Main from "./components/Main";

function App() {

  const user = localStorage.getItem("token");

  return (
    <div>
      <Navigation />
      <Home />
      <Routes>
        {user && <Route path="/" exact element= {<Main />}/>}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
