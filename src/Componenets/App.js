import React, { useState } from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calc from './Calc';
import NormCalc from './NormCalc';
import SciCalc from './SciCalc';
import LoadingBar from 'react-top-loading-bar'
import HomePage from './HomePage';
import Contact from './Contact';
import KeepNote from './KeepNote';
import NoteState from '../Context/Notes/NoteState';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <NoteState>
      <BrowserRouter>
        <LoadingBar
          color='red'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <Navbar setProgress={setProgress} />

        <Routes>
        <Route excat path="/" element={<HomePage setProgress={setProgress}/>} />
        <Route excat path="/home" element={<Home setProgress={setProgress}/>} />
        <Route excat path="/about" element={<About setProgress={setProgress}/>} />
        <Route excat path="/contact" element={<Contact setProgress={setProgress}/>} />
        <Route excat path="/keepnote" element={<KeepNote setProgress={setProgress}/>} />
        <Route excat path="/calc" element={<Calc setProgress={setProgress}/>}>
          <Route path="normcalc" element={<NormCalc />} />
          <Route path="scicalc" element={<SciCalc />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
