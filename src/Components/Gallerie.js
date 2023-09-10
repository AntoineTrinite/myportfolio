/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../styles/Gallerie.css';
import '../img/noise.png';
import kasa from '../img/kasa.webp';
import nina from '../img/nina-p.webp';
import mvg from '../img/mvg.webp';
import hubilearn from '../img/hubilearn.webp';

const Gallerie = () => {
  const [activeCard, setActiveCard] = useState(0);

  const toggleCard = (index) => {
    setActiveCard(index === activeCard ? -1 : index);
  };

  return (
    <div className='project-container'>
      <h3 className='project-title'>Mes projets _/</h3>

      <div className="project-divider">
        <div className="description-part">
          <span className='scroll-option'>Scroll down to see the web sites images</span>
          {/* Card 1 */}
          <div className={`card ${activeCard === 0 ? 'active' : ''}`} onClick={() => toggleCard(0)}>
            <div className="title-head">
              <span className='project-title-name'>HUBILEARN</span>
              <div className='reducer'>
                {activeCard === 0 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">NextJs</div>
                <div className="tag-card">OAuth</div>
                <div className="tag-card">Prisma</div>
                <div className="tag-card">Neon</div>
              </div>
              <p className="project-description">
                Work in progress - Version 0.2<br/>
                Creation of an e-learning platform.<br/>
                My aim with this project is to create an e-learning platform that will allow me to upload lessons, do lives, and give students online exercises in various forms (mini-games, fill-in-the-blank texts, online ide, etc.).
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`card ${activeCard === 1 ? 'active' : ''}`} onClick={() => toggleCard(1)}>
            <div className="title-head">
              <span className='project-title-name'>Kasa</span>
              <div className='reducer'>
                {activeCard === 1 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">React</div>
                <div className="tag-card">HTML/CSS</div>
                <div className="tag-card">JS</div>
              </div>
              <p className="project-description">
                Creation of a real estate rental web application with React.<br/>
                Thanks to this OpenClassrooms project, I was able to learn how to use React. The main difficulty was learning how to use props, states and manage dynamic display with the gallery.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="https://github.com/AntoineTrinite/Kasa" target="_blank" rel="noreferrer">Github code</a>
                <a className='link-site' href="https://antoinetrinite.github.io/Kasa/" target="_blank" rel="noreferrer">Web site</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`card ${activeCard === 2 ? 'active' : ''}`} onClick={() => toggleCard(2)}>
            <div className="title-head">
              <span className='project-title-name'>Nina Carducci</span>
              <div className='reducer'>
                {activeCard === 2 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">JQuery</div>
                <div className="tag-card">SEO</div>
                <div className="tag-card">Optimisation</div>
              </div>
              <p className="project-description">
                It's an OpenClassrooms project that taught me the basics of SEO and optimization. As well as notions of JQuery. The main difficulty for me was to learn how to use schemas.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="https://github.com/AntoineTrinite/P5-nina-carducci" target="_blank" rel="noreferrer">Github code</a>
                <a className='link-site' href="https://antoinetrinite.github.io/P5-nina-carducci/" target="_blank" rel="noreferrer">Web site</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className={`card ${activeCard === 3 ? 'active' : ''}`} onClick={() => toggleCard(3)}>
            <div className="title-head">
              <span className='project-title-name'>Mon Vieux Grimoire</span>
              <div className='reducer'>
                {activeCard === 3 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">NodeJs</div>
                <div className="tag-card">MongoDB</div>
              </div>
              <p className="project-description">
                This OpenClassrooms project allowed me to learn how to create the backend of a site. The hardest part for me was learning to understand how the backend worked.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="https://github.com/AntoineTrinite/P7-Mon-Vieux-Grimoire" target="_blank" rel="noreferrer">Github code</a>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-part">
          <div className={`site-card ${activeCard === 0 ? 'active' : ''}`}>
            <span className='site-title'>HUBILEARN</span>
            <img className='site-img' src={hubilearn} alt="Hubilearn website" />
          </div>

          <div className={`site-card ${activeCard === 1 ? 'active' : ''}`}>
            <span className='site-title'>Kasa</span>
            <a href="https://antoinetrinite.github.io/Kasa/" target="_blank" rel="noreferrer"><img className='site-img' src={kasa} alt="kasa website" /></a>
          </div>

          <div className={`site-card ${activeCard === 2 ? 'active' : ''}`}>
            <span className='site-title'>Nina Carducci</span>
            <a href="https://antoinetrinite.github.io/P5-nina-carducci/" target="_blank" rel="noreferrer"><img className='site-img' src={nina} alt="nina carducci website" /></a>
          </div>

          <div className={`site-card ${activeCard === 3 ? 'active' : ''}`}>
            <span className='site-title'>Mon Vieux Grimoire</span>
            <a href="https://github.com/AntoineTrinite/P7-Mon-Vieux-Grimoire" target="_blank" rel="noreferrer"><img className='site-img' src={mvg} alt="Mon Vieux Grimoire site" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerie;
