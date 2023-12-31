import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/Contact.css';
import coffee from '../img/coffe.jpg';

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false); // New state variable


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nldqbke', 'template_bkcwkzc', form.current, 'OKExxnt1AQdel3FHf')
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const rect = form.current.getBoundingClientRect();
      const topOffset = window.innerHeight * 1; // Adjust this value as needed

      if (rect.top < topOffset && rect.bottom >= topOffset && !hasAnimationPlayed) {
        setIsFormVisible(true);
        setHasAnimationPlayed(true); // Set the flag to true after animation played
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check when component mounts

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimationPlayed]); // Add hasAnimationPlayed as a dependency

  return (
    <>
      <h3 className='title-h3'>An offer? Contact me _/</h3>
      {isFormSubmitted && (
        <div className="confirmation-message">
          Merci ! Votre message a été envoyé avec succès.
        </div>
      )}
      <div className='contact-form-all'>
        <div className="bg-grid-2"></div>
        <form className={`contact-form-part ${isFormVisible ? 'fade-in' : 'hidden'}`} ref={form} onSubmit={sendEmail}>
          <label htmlFor="nom">Name</label>
          <input className="input" type="text" id="nom" name="user_name" placeholder='Name' required /><br/>
          <label htmlFor="email">E-mail</label>
          <input className="input" type="email" id="email" name="user_email" placeholder='Email' required /><br/>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" className="input" placeholder='Message' required></textarea><br/>
          <div className="submit-button-container">
            <input id='submit' type="submit" value="Send" />
          </div>
        </form>
        <div className="contact-img-part">
          <img className='img-coffee' src={coffee} alt="coffee on a table with a pc" />
        </div>
      </div>
    </>
  );
};

export default Contact;
