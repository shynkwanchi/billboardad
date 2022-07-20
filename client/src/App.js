import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from "./routes/Details/details";
import Home from "./routes/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;