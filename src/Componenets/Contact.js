import React, { useEffect, useRef } from 'react';
import './css/Contact.css'
import photoImg from './images/photo.jpg'
import photImg1 from './images/photo-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

export default function Contact({ setProgress }) {

  useEffect(() => {
    setProgress(10);
    setProgress(100);
  }, [setProgress])

  const ref = useRef(null);

  const submitFeedback = () => {
    ref.current.click();
  }

  return (
    <>
      <div className='about-container'>
        <header className='d-flex justify-content-center align-item-center'>
          <div className='about-head-text'>
            <h2 className='about-head-text-headers text-center'>Want to know more?</h2>
            <h2 className='about-head-text-headers text-center'>Reach out to us!!</h2>
            <button type="button" className="contact-btns btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Contact Us
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header contact-modal-header">
                    <h2 className="modal-title fs-5" id="staticBackdropLabel">Contact Us</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body contact-modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">Enter your name</label>
                        <input type="text" class="form-control" id="exampleInputText1" placeholder='Enter your full name' />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder='e.g. example@mail.com' />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="exampleInputText1" placeholder='Enter the subject of the message' />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">Description</label>
                        <textarea className="form-control" name='edescription' id="TextInput3" placeholder='Please! describe your message'></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer contact-modal-footer">
                    <button type="button" ref={ref} className="submit-btns btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="submit-btns btn btn-success" onClick={submitFeedback}>Send Message</button>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  )
}
