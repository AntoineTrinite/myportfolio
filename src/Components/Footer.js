import React from 'react';
import '../styles/Footer.css';
import '../img/noise.png';


const Footer = () => {
    const handleScrollToMiddle = () => {
        const windowHeight = window.innerHeight;
        const middleOfPage = windowHeight / 1.2;
    
        window.scrollTo({
          top: middleOfPage,
          behavior: 'smooth',
        });
      };
    return (
        <footer className='f-section noise'>
            
            <div className="footer-group">
                <ul className='footer-lists'>
                    <li className='footer-li portable-none' onClick={handleScrollToMiddle}>My projects</li>
                    
                    <a className='footer-link' href="https://www.linkedin.com/in/antoine-trinit%C3%A9-8a27a1159/"  target="_blank" rel="noreferrer"><li className='footer-li'>LinkedIn</li></a>
                </ul>
                <ul className='footer-lists'>
                    <li>Terms of use :<br/><br/>
                    Antoine Trinité - Site hosted on GitHub <br/><br/>
                    This website does not collect cookies. Only your email and message will be registered uppon send </li>
                </ul>
                
            </div>
        </footer>
    );
  };
  
  export default Footer;
  