import React, { useState, useEffect } from 'react'
import './css/Calc.css'
import NormCalc from './NormCalc'
import SciCalc from './SciCalc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt, faBarsProgress, faEquals, faPercent, faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, Link } from 'react-router-dom';

export default function Calc({ setProgress }) {
  const [path, setPath] = useState("/calc/scicalc");
  useEffect(() => {
    setProgress(10);
    setProgress(100);
  }, [setProgress])

  return (
    <>
      <div className='calc-page'>
        <div className="cal-container">
          <div className='cal-top d-flex justify-content-between align-item-center'>
            <span className='mx-2 calc-head'><FontAwesomeIcon icon={faBarsProgress} /> &nbsp; {path === '/calc/' ? 'Scientific Calculator' : 'Standard Claculator'}</span>
            <Link onClick={() => setPath(path === '/calc/' ? '/calc/scicalc' : '/calc/')} to={path} className='mx-2 calc-head calc-head-r'>
              <FontAwesomeIcon icon={path === '/calc/' ? faCompressAlt : faExpandAlt} />
            </Link>
          </div>

          <Routes>
            <Route path="/" element={<NormCalc />} />
            <Route path="scicalc" element={<SciCalc />} />
          </Routes>
        </div>
        <div className='calc-circle'></div>
        <div className='calc-square'></div>
        <FontAwesomeIcon className='calc-symbols-pos1' icon={faEquals} />
        <FontAwesomeIcon className='calc-symbols-pos2' icon={faPercent} />
        <FontAwesomeIcon className='calc-symbols-pos3' icon={faXmark} />
        <FontAwesomeIcon className='calc-symbols-pos4' icon={faPlus} />
        <FontAwesomeIcon className='calc-symbols-pos5' icon={faMinus} />
      </div>
    </>
  )
}
