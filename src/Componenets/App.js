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
import Login from './Login';
import Signup from './Signup';
import Alert from './Alert';
import AuthState from '../Context/Auths/AuthState';

function App() {
  const [progress, setProgress] = useState(0);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <AuthState>
      <NoteState>
        <BrowserRouter>
          <LoadingBar
            color='red'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />

          <Navbar setProgress={setProgress} />
          <Alert alert={alert} />

          <Routes>
            <Route excat path="/" element={<Login showAlert={showAlert} />} />
            <Route excat path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route excat path="/homepage" element={<HomePage setProgress={setProgress} />} />
            <Route excat path="/home" element={<Home setProgress={setProgress} />} />
            <Route excat path="/about" element={<About setProgress={setProgress} />} />
            <Route excat path="/contact" element={<Contact setProgress={setProgress} />} />
            <Route excat path="/keepnote" element={<KeepNote setProgress={setProgress} showAlert={showAlert} />} />
            <Route excat path="/calc" element={<Calc setProgress={setProgress} />}>
              <Route path="normcalc" element={<NormCalc />} />
              <Route path="scicalc" element={<SciCalc />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </AuthState>
  );
}

export default App;
