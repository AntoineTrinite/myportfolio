import React from 'react';
import '../styles/header.css'

const Header = () => {
    const handleScrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth', // Utilisez 'auto' si vous préférez un défilement instantané
        });
      };

      const handleScrollToMiddle = () => {
        const windowHeight = window.innerHeight;
        const middleOfPage = windowHeight / 1.2;
    
        window.scrollTo({
          top: middleOfPage,
          behavior: 'smooth',
        });
      };

    return (
        <div className='head'>
            <h1 className='head-title'>Antoine Trinité</h1>
            <ul className='nav'>
                <li className='link portable-none' onClick={handleScrollToMiddle}>Mes projets</li>
                <a className='external-link' href="https://www.linkedin.com/in/antoine-trinit%C3%A9-8a27a1159/"  target="_blank" rel="noreferrer"><li className='link'>LinkedIn</li></a>
                <li className='link contact-me' onClick={handleScrollToBottom}>Contactez-moi</li>
            </ul>
        </div>
    );
  };
  
  export default Header;