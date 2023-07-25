import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/Contact.css';
import coffee from '../img/coffe.jpg';

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
  setTimeout(() => {
    setIsFormSubmitted(false);
  }, 5000);

  return (
    <>
      <h3 className='title-h3'>Une offre, un projet, contactez-moi _/</h3>
      {isFormSubmitted && (
              <div className="confirmation-message">
                Merci ! Votre message a été envoyé avec succès.
              </div>)}
      <div className='contact-form-all'>
        <div className="bg-grid-2"></div>

        <form className='contact-form-part' ref={form} onSubmit={sendEmail}>
          <label htmlFor="nom">Nom</label>
          <input className="input" type="text" id="nom" name="user_name" placeholder='Nom' required /><br/>

          <label htmlFor="email">E-mail</label>
          <input className="input" type="email" id="email" name="user_email" placeholder='Email' required /><br/>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" className="input" placeholder='Message' required></textarea><br/>

          <div className="submit-button-container">
            <input id='submit' type="submit" value="Envoyer" />
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
