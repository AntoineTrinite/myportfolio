import React, { useState } from 'react';
import '../styles/Gallerie.css';
import '../img/noise.png';
import kasa from '../img/kasa.webp';
import groupomania from '../img/groupo.webp';
import nina from '../img/nina-p.webp';
import mvg from '../img/mvg.webp';

const Gallerie = () => {
  const [activeCard, setActiveCard] = useState(0); // Set initial active card to 0

  const toggleCard = (index) => {
    setActiveCard(index === activeCard ? -1 : index); // Toggle the active state
  };

  return (
    <div className='project-container'>
      <h3 className='project-title'>Mes projets _/</h3>

      <div className="project-divider">
        <div className="description-part">

          {/* Card 1 */}
          <div className={`card ${activeCard === 0 ? 'active' : ''}`}>
            <div className="title-head">
              <span className='project-title-name'>Kasa</span>
              <div className='reducer' onClick={() => toggleCard(0)}>
                {activeCard === 0 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">React</div>
                <div className="tag-card">HTML/CSS</div>
                <div className="tag-card">JS</div>
              </div>
              <p className="project-description">
                Création d'une application web de location immobilière avec React. <br/>
                Grâce à ce projet OpenClassrooms, j'ai pu apprendre à utiliser React. La principale difficulté a été d'apprendre à utiliser les props, les states et à gérer l'affichage dynamique avec la galerie.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="https://github.com/AntoineTrinite/Kasa" target="_blank" rel="noreferrer">Code Github</a>
                <a className='link-site' href="https://github.com/AntoineTrinite/Kasa" target="_blank" rel="noreferrer">Accéder au site</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`card ${activeCard === 1 ? 'active' : ''}`}>
            <div className="title-head">
              <span className='project-title-name'>Groupomania</span>
              <div className='reducer' onClick={() => toggleCard(1)}>
                {activeCard === 1 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">React</div>
                <div className="tag-card">HTML/CSS</div>
                <div className="tag-card">JS</div>
                <div className="tag-card">NodeJs</div>
                <div className="tag-card">MySQL</div>
              </div>
              <p className="project-description">
                [ Projet en cours ] - Ici la principale difficultée est qu'il faut imaginer la totalité de la structure du site web. Que ce soit du côté frontend ou backend. Je met ce projet ici parce que j'ai presque terminé le frontend.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="https://github.com/AntoineTrinite/P9-Groupomania" target="_blank" rel="noreferrer">Code Github</a>
                <a className='link-site' href="https://github.com/AntoineTrinite/P9-Groupomania" target="_blank" rel="noreferrer">Accéder au site</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`card ${activeCard === 2 ? 'active' : ''}`}>
            <div className="title-head">
              <span className='project-title-name'>Nina Carducci</span>
              <div className='reducer' onClick={() => toggleCard(2)}>
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
                C'est un projet d'OpenClassrooms qui m'a permis d'apprendre les bases du SEO et de l'optimisation. Ainsi que des notions de JQuery. La principale difficulté pour moi à été d'apprendre à utiliser les schémas/
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="https://github.com/AntoineTrinite/P5-nina-carducci" target="_blank" rel="noreferrer">Code Github</a>
                <a className='link-site' href="https://antoinetrinite.github.io/P5-nina-carducci/" target="_blank" rel="noreferrer">Accéder au site</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className={`card ${activeCard === 3 ? 'active' : ''}`}>
            <div className="title-head">
              <span className='project-title-name'>Mon Vieux Grimoire</span>
              <div className='reducer' onClick={() => toggleCard(3)}>
                {activeCard === 3 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">NodeJs</div>
                <div className="tag-card">MongoDB</div>
              </div>
              <p className="project-description">
                Ce projet d'OpenClassrooms m'a permis d'apprendre à créer le backend d'un site. Le plus difficile pour moi à été d'apprendre à comprendre le fonctionnement du backend.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="https://github.com/AntoineTrinite/P7-Mon-Vieux-Grimoire" target="_blank" rel="noreferrer">Code Github</a>
                <a className='link-site' href="https://github.com/AntoineTrinite/P7-Mon-Vieux-Grimoire" target="_blank" rel="noreferrer">Accéder au site</a>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-part">
          <div className={`site-card ${activeCard === 0 ? 'active' : ''}`}>
            <span className='site-title'>Kasa</span>
            <a href="https://github.com/AntoineTrinite/Kasa" target="_blank" rel="noreferrer"><img className='site-img' src={kasa} alt="kasa website" /></a>
            
          </div>
          <div className={`site-card ${activeCard === 1 ? 'active' : ''}`}>
            <span className='site-title'>Groupomania</span>
            <a href="https://github.com/AntoineTrinite/P9-Groupomania" target="_blank" rel="noreferrer"><img className='site-img' src={groupomania} alt="groupomania website" /></a>
            
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
