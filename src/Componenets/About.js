import React from 'react'
import logoA from './logoA.png'
import logoB from './logoB.png'
import logoC from './logoC.png'
import logoD from './logoD.png'
import logoE from './logoE.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <>
      <h1 className='container text-center about-header'>Key Features of Our WebBook</h1>
      <div style={{ backgroundColor: '#293e48' }} className='container p-2 about-head'>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src={logoA} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Editor Page - HTML, CSS, JS 🔥🔥🔥</h5>
                <p>You can create your own website in this editor by typing simple HTML, CSS and Javascript ...</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={logoB} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Dark Theme / Light Theme 😍</h5>
                <p>You can seemlessly change your theme for each editor ...</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={logoC} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Expand / Collapse 😎</h5>
                <p>Expand or collpase your each code editor as you want ...</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={logoD} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Download / Export ✌️✌️</h5>
                <p>You can even download this files in a bundle text/html format in your local disk ...</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={logoE} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Key Features 😊</h5>
                <p>The editor even has auto close-tag and auto close-brackets like features ...</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section className='container d-flex flex-column justify-content-center align-item-center about-text'>
        <h4>Components :</h4>
        <span>Activtiy 1.0.0 : CodeMirror@5.65.14</span>
        <span>Activtiy 1.0.1 : ReactCodeMirror2@7.2.1</span>
        <span>Activtiy 1.0.2 : React@18.2.0</span>
        <span>Activtiy 1.0.3 : ReactBootstrap@2.8.0</span>
        <span>Activtiy 1.1.0 : ReactRouterDom@6.14.2</span>
        <span>Activtiy 1.1.1 : ReactScript@5.0.1</span>
        <br />
        <span>Activtiy 2.0.0 : WebVitals@2.1.4</span>
        <span>Activtiy 2.1.0 : @fortawesome/fontawesome-svg-core@6.4.0</span>
        <span>Activtiy 2.1.1 : @fortawesome/free-solid-svg-icons@6.4.0</span>
        <span>Activtiy 2.1.2 : @fortawesome/react-fontawesome@0.2.0</span>
        <br />
        <span>Activtiy 3.0.0 : babel/code-frame@7.22.5</span>
        <span>Activtiy 3.0.1 : babel/generator@7.22.9</span>
        <span>Activtiy 3.0.2 : babel/helper-compilation-targets@7.22.9</span>
        <span>Activtiy 3.0.3 : babel/helper-module-transforms@7.22.9</span>
        <span>Activtiy 3.0.4 : babel/helpers@7.22.6</span>
        <span>Activtiy 3.0.5 : babel/parser@7.22.7</span>
        <span>Activtiy 3.0.6 : babel/template7.22.5</span>
        <span>Activtiy 3.1.7 : "@babel/traverse": "^7.22.8"</span>
        <span>Activtiy 3.2.0 : "@babel/types": "^7.22.5"</span>
        <hr></hr>
        <span>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</span>
        <span>1.Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</span>
        <span>2.Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</span><br></br>
        <span>THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
          SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
          OF SUBSTITUTE GOODS OR SERVICES; LOSS OF
          USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
          CONTRACT.</span>
      </section>

      <footer className='text-center d-flex flex-column justify-content-center align-item-center about-text'>
        <span><FontAwesomeIcon icon={faCopyright} /> Copyright 2023 Shorty. All Rights Reserved Designed by Sayan Parui</span>
      </footer>
    </>
  )
}
