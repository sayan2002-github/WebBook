import React from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calc from './Calc';
import NormCalc from './NormCalc';
import SciCalc from './SciCalc';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route excat path="/" element={<Home />} />
        <Route excat path="/about" element={<About />} />
        <Route excat path="/calc" element={<Calc />}>
          <Route path="normcalc" element={<NormCalc />} />
          <Route path="scicalc" element={<SciCalc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
