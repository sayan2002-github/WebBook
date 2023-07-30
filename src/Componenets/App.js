import React from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
