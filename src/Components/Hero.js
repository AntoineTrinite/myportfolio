import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import Moi from '../img/Moi.jpg';

const Hero = () => {
    const [rotateValues, setRotateValues] = useState({ rotateX: 0, rotateY: 0 });
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleMouseMove = event => {
        if (!isSmallScreen) {
            const posX = (event.pageX / window.innerWidth - 0.5) * 10;
            const posY = (event.pageY / window.innerHeight - 0.5) * -5;
            setRotateValues({ rotateX: posY, rotateY: posX });
        }
    };

    const handleMouseLeave = () => {
        setRotateValues({ rotateX: 0, rotateY: 0 });
    };

    useEffect(() => {
        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Adjust the screen size threshold as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check when component mounts

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="bg-grid"></div>
            <div className="separator">
                <div className="pres-sep">
                    <div className="slogan">
                        <span className='hello-span'>Hello, </span>
                        <h2 className='dev-title'> i am <span className='underscore-title'>a Frontend Developper</span></h2>
                    </div>

                    <p className='intro-text'>Passionate about the web and Japan. I'm a curious, motivated and open-minded person. I love discovering new horizons and learning new things.</p>

                    <div className="btn-group">
                        <a href="https://github.com/AntoineTrinite" target="_blank" rel="noreferrer">
                            <button className='btn-rs'> Github</button>
                        </a>
                        <a href="https://www.linkedin.com/in/antoine-trinit%C3%A9-8a27a1159/" target="_blank" rel="noreferrer">
                            <button className='btn-rs'> Linkedin</button>
                        </a>
                        <button className='hero-contact' onClick={handleScrollToBottom}>
                            <p className='p-hero-contact'>Contact</p>
                        </button>
                    </div>
                </div>
                <div className="img-sep">
                    <img
                        className={`img ${isSmallScreen ? 'img-static' : ''}`}
                        src={Moi}
                        alt="Web developer of this website"
                        style={{ transform: `rotateX(${rotateValues.rotateX}deg) rotateY(${rotateValues.rotateY}deg)` }}
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
