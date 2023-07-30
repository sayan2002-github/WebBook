import React from 'react'
import logoA from './logoA.png'
import logoB from './logoB.png'
import logoC from './logoC.png'
import logoD from './logoD.png'

export default function About() {
  return (
    <div style={{height: '100vh', backgroundColor: '#293e48'}} className='about-header p-2'>
    <h1 className='container text-center'>Key Features of Our WebBook</h1>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="4000">
      <img src={logoA} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Editor Page - HTML, CSS, JS 🔥🔥🔥</h5>
        <p>You can create your own website in this editor by typing simple HTML, CSS and Javascript ...</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={logoB} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Dark Theme / Light Theme 😍</h5>
        <p>You can seemlessly change your theme for each editor ...</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={logoC} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Expand / Collapse 😎</h5>
        <p>Expand or collpase your each code editor as you want ...</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={logoD} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Download / Export ✌️✌️</h5>
        <p>You can even dowload this files in a bundle text format in your local disk ...</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
