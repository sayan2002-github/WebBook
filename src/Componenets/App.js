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
import FrogetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';

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
          <Route exact path="/" element={<Login showAlert={showAlert} />} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
          <Route exact path="/forgetpass" element={<FrogetPassword showAlert={showAlert}/>} />
          <Route exact path="/resetpass/:id/:token" element={<ResetPassword showAlert={showAlert}/>} />
          <Route exact path="/homepage" element={<HomePage setProgress={setProgress} />} />
          <Route exact path="/home" element={<Home setProgress={setProgress} />} />
          <Route exact path="/about" element={<About setProgress={setProgress} />} />
          <Route exact path="/contact" element={<Contact setProgress={setProgress} />} />
          <Route exact path="/keepnote" element={<KeepNote setProgress={setProgress} showAlert={showAlert} />} />
          <Route exact path="/calc" element={<Calc setProgress={setProgress} />}>
            <Route path="normcalc" element={<NormCalc />} />
            <Route path="scicalc" element={<SciCalc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
