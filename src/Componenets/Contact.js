import React, { useEffect } from 'react';
import './Contact.css'
import photoImg from './images/photo.jpg'
import photImg1 from './images/photo-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLeaf, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Contact({ setProgress }) {

  useEffect(() => {
    setProgress(10);
    setProgress(100);
  }, [setProgress])

  function openContactInfo() {
    if(document.getElementById('contact-form-submit') != null){
      document.getElementById('contact-form-submit').style.display = 'block';
    }
  }

  function closeContactInfo() {
    if(document.getElementById('contact-form-submit') != null){
      document.getElementById('contact-form-submit').style.display = 'none';
    }
  }

  return (
    <>
      <div className='about-container'>
        <header className='d-flex justify-content-center align-item-center'>
          <div className='about-head-text'>
            <h2 className='text-center'>Want to know more?</h2>
            <h2 className='text-center'>Reach out to us!!</h2>
            <button className='contact-btns btn btn-success' onClick={openContactInfo}>Contact Us</button>
          </div>
          <div className='about-head-img '>
            <div className='ab-circle'></div>
            <div className='d-flex justify-content-center align-item-center'>
              <img className='about-img-1' src={photImg1} alt='..'></img>
              <img className='about-img-2' src={photoImg} alt='..'></img>
            </div>
          </div>
        </header>

        <footer className='container about-container d-flex justify-content-around align-item-center'>
          <div className='leaf-footer'><FontAwesomeIcon icon={faLeaf} /></div>
          <h2>Get started with WebBook and give feedback to help us to get better !!</h2>
          <div className='footer-link d-flex flex-column justify-content-around align-item-center'>
            <span>Phone : +91 629XXXXXXX</span>
            <span>Email : sayanparui076@gmail.com</span>
            <div className='about-footer-links d-flex justify-content-between align-item-center'>
              <a className='footer-link-1' href='https://www.facebook.com/sayan.paruis/' target='__blank'><FontAwesomeIcon icon={faFacebookF} /></a>
              <a className='footer-link-2' href='https://twitter.com/SayanParui24' target='__blank'><FontAwesomeIcon icon={faTwitter} /></a>
              <a className='footer-link-3' href='https://www.instagram.com/sayan_parui24/' target='__blank'><FontAwesomeIcon icon={faInstagram} /></a>
              <a className='footer-link-4' href='https://www.linkedin.com/in/sayan-parui-b1ab3a227/' target='__blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a className='footer-link-5' href='https://github.com/sayan2002-github' target='__blank'><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </footer>
      </div>
      
      <div className='container contact-info' id='contact-form-submit'>
        <button className='btn contact-info-cross' onClick={closeContactInfo}><FontAwesomeIcon icon={faCircleXmark} /></button>
        <h2>Contact Us</h2>
        <form action="mailto:sayanparui076@gmail.com" method="post" encType="text/plain">
          <div className="row">
            <div className="input-group">
              <input type="text" placeholder="Name" className="input-control" required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Mail Id" className="input-control" required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Subject" className="input-control" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Message" tyepe="text" className="input-control"></textarea>
            </div>
            <div className="submit-btn">
              <button type="button" className="contact-btns btn btn-success">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
