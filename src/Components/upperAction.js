import React, { useState, useEffect } from 'react';
import '../styles/upperArrow.css';

const Upper = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  return (
    
      <div className={`upper-arrow ${showArrow ? 'visible' : ''}`} onClick={scrollToTop}>
        <p className='upper-text'>^</p>
      </div>
  );
};

export default Upper;
