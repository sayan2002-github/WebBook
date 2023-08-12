import React, { useState } from 'react'
import NormCalc from './NormCalc'
import SciCalc from './SciCalc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, Link } from 'react-router-dom';

export default function Calc() {
  const [path, setPath] = useState("/calc/scicalc");
  return (
    <div className="cal-container">
      <div className='cal-top d-flex justify-content-between align-item-center'>
        <span className='mx-2 calc-head'>{path === '/calc/' ? 'Scientific Calculator' : 'Calculator'}</span>
        <Link onClick={() => setPath(path === '/calc/' ? '/calc/scicalc' : '/calc/')} to={path} className='mx-2 calc-head calc-head-r'>
          <FontAwesomeIcon icon={path === '/calc/' ? faCompressAlt : faExpandAlt} />
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<NormCalc />} />
        <Route path="scicalc" element={<SciCalc />} />
      </Routes>

    </div>
  )
}
