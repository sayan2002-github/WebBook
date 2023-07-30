import React from 'react'
import logoA from './logoA.png'
import logoB from './logoB.png'
import logoC from './logoC.png'
import logoD from './logoD.png'
import logoE from './logoE.png'

export default function About() {
  return (
    <div style={{height: '100vh', backgroundColor: '#293e48'}} className='about-header p-2'>
    <h1 className='container text-center'>Key Features of Our WebBook</h1>
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
      <img src={logoA} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Editor Page - HTML, CSS, JS 🔥🔥🔥</h5>
        <p>You can create your own website in this editor by typing simple HTML, CSS and Javascript ...</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={logoB} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Dark Theme / Light Theme 😍</h5>
        <p>You can seemlessly change your theme for each editor ...</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={logoC} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Expand / Collapse 😎</h5>
        <p>Expand or collpase your each code editor as you want ...</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={logoD} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Download / Export ✌️✌️</h5>
        <p>You can even download this files in a bundle text/html format in your local disk ...</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={logoE} class="d-block w-100" alt="..."/>
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
  )
}
