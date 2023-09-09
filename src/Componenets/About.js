import React, { useEffect } from 'react'
import './css/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faSitemap, faIdBadge } from '@fortawesome/free-solid-svg-icons'
import aboutGif from './images/about-gif.gif'

export default function About({ setProgress }) {
  useEffect(() => {
    setProgress(10);
    setProgress(100);
  }, [setProgress])

  return (
    <>
      <img className='container text-center about-header' src={aboutGif} alt='...'></img>

      <div className='container about-tab-container'>
        <div className="about-tabs">
          <button type="button" className="tab-item" data-target="#">Our Journey</button>
        </div>

        <div className="tab-content active" id="education">
          <div className="timeline">
            <div className="timeline-item">
              <div className='container'>
                <p className="date">Version 1.0.0 (Major)</p>
                <h4> - Added the HTML, CSS, JavaScript Editor</h4>
                <p>The journey started with version 1.0.0 by adding Web Development editor to edit HTML, CSS and JavaScript.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className='container'>
                <p className="date">Version 2.0.0 (Major)</p>
                <h4> - Added Calculator and Digital Watch</h4>
                <p>In major update version 2.0.0, I added the Calculator that can seemlessly transform into a Scientific Calculator. And also added a digital watch to provide time while working in your project with just one click !!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className='container'>
                <p className="date">Version 2.0.1 (Minor)</p>
                <h4> - Added the Top Loading Bar and fixed the navbar</h4>
                <p>In minor update version 2.0.1, I fixed some bugs in navbar and added the top loading bar to reflect the change of routing !!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className='container'>
                <p className="date">Version 2.1.0 (Feature)</p>
                <h4> - Added the Home Page</h4>
                <p>In a feature updation version 2.1.0, added this beautiful homepage with the weather component secion and clock section !!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className='container'>
                <p className="date">Version 2.2.0 (Feature)</p>
                <h4> - Added the Contact Page</h4>
                <p>In a feature updation version 2.2.0, added this beautiful contact page with feedback form and all the related links for follow !!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion container" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <FontAwesomeIcon icon={faSitemap} /> &ensp;About Componenets :
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <p>Activtiy 1.0.0 : CodeMirror@5.65.14</p>
              <p>Activtiy 1.0.1 : ReactCodeMirror2@7.2.1</p>
              <p>Activtiy 1.0.2 : React@18.2.0</p>
              <p>Activtiy 1.0.3 : ReactBootstrap@2.8.0</p>
              <p>Activtiy 1.1.0 : ReactRouterDom@6.14.2</p>
              <p>Activtiy 1.1.1 : ReactScript@5.0.1</p>
              <br />
              <p>Activtiy 2.0.0 : WebVitals@2.1.4</p>
              <p>Activtiy 2.1.0 : @fortawesome/fontawesome-svg-core@6.4.0</p>
              <p>Activtiy 2.1.1 : @fortawesome/free-solid-svg-icons@6.4.0</p>
              <p>Activtiy 2.1.2 : @fortawesome/react-fontawesome@0.2.0</p>
              <br />
              <p>Activtiy 3.0.0 : babel/code-frame@7.22.5</p>
              <p>Activtiy 3.0.1 : babel/generator@7.22.9</p>
              <p>Activtiy 3.0.2 : babel/helper-compilation-targets@7.22.9</p>
              <p>Activtiy 3.0.3 : babel/helper-module-transforms@7.22.9</p>
              <p>Activtiy 3.0.4 : babel/helpers@7.22.6</p>
              <p>Activtiy 3.0.5 : babel/parser@7.22.7</p>
              <p>Activtiy 3.0.6 : babel/template7.22.5</p>
              <p>Activtiy 3.1.7 : "@babel/traverse": "^7.22.8"</p>
              <p>Activtiy 3.2.0 : "@babel/types": "^7.22.5"</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <FontAwesomeIcon icon={faIdBadge} /> &ensp;About Licenses :
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <p>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</p>
              <p>1.Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</p>
              <p>2.Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className='text-center d-flex flex-column justify-content-center align-item-center about-text-footer'>
        <p>THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
          SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
          OF SUBSTITUTE GOODS OR SERVICES; LOSS OF
          USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
          CONTRACT.</p>
        <p><FontAwesomeIcon icon={faCopyright} /> Copyright 2023 Shorty. All Rights Reserved Designed by Sayan Parui</p>
      </footer>
    </>
  )
}
