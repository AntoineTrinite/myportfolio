import React, { useState } from 'react';
import '../styles/TechPres.css';
import '../img/noise.png';
import MoiSansBg from '../img/Moi-sans-bg.png'

const TechPres = () => {
  const [activeTab, setActiveTab] = useState('technology');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
    const handleDownload = () => {
      const pdfFilePath = 'src/files/CV2023.pdf';
      
      const downloadLink = document.createElement('a');
      downloadLink.href = pdfFilePath;
      downloadLink.download = 'cv_antoine_trinite.pdf'; 
      downloadLink.click();
    };

  return (
    <div className="tech-pres">
      <div className="title-part">
        <button
          className={`title-tech-pres ${activeTab === 'technology' ? 'title-active' : ''}`}
          onClick={() => handleTabChange('technology')}
        >
          Technologies _/
        </button>
        <button
          className={`title-tech-pres ${activeTab === 'presentation' ? 'title-active' : ''}`}
          onClick={() => handleTabChange('presentation')}
        >
          Présentation _/
        </button>
      </div>
      {activeTab === 'technology' && (
        <div className="technology">
          <div className="tech-card noise">
            <span className="tech-card-title">Html/Css</span>
            <p className="tech-card-description">
              9 Projets réalisés
            </p>
          </div>
          <div className="tech-card noise">
            <span className="tech-card-title">Javascript</span>
            <p className="tech-card-description">
              3 Projets réalisés
            </p>
          </div>
          <div className="tech-card noise">
            <span className="tech-card-title">React</span>
            <p className="tech-card-description">
              2 Projets réalisés<br/>1 projet en cours
            </p>
          </div>
          <div className="tech-card noise">
            <span className="tech-card-title">MongoDB</span>
            <p className="tech-card-description">
              1 Projets réalisé
            </p>
          </div>
          <div className="tech-card noise">
            <span className="tech-card-title">NodeJs</span>
            <p className="tech-card-description">
              1 Projets réalisé
            </p>
          </div>
          <div className="tech-card noise">
            <span className="tech-card-title">Figma</span>
            <p className="tech-card-description">
              2 Projets réalisé<br/>2 projet en cours
            </p>
          </div>
        </div>
      )}
      {activeTab === 'presentation' && (
        <div className="presentation">
          <div className="pres-main noise">
            <div className="pres-first-part">
              <span className='pres-title'>Qui suis-je ?</span>
              <p className='pres-text'>
                Je suis passionné par le dev et le Japon. Suite à une licence en Japonais et un voyage d'un an au japon.
                J'ai décidé de devenir développeur web dans le but de pouvoir créer des sites webs et applications en français et en japonais.
                Mon rêve et de pouvoir aider les deux côtés à mieux se connaître et à créer des connexions entre les deux pays.
              </p>
              <span className='pres-title'>Mes soft skills</span>
                <div className="soft-div">
                    <ul className='soft-ul'>
                        <li className='soft-li'>Flexibilité</li>
                        <li className='soft-li'>Autonomie</li>
                    </ul>
                    <ul className='soft-ul'>
                        <li className='soft-li'>Créativité</li>
                        <li className='soft-li'>Sens du service</li>
                    </ul>
                </div>
            </div>
            <div className="pers-inter-part"></div>
            <div className="pres-second-part">
                <div className="soft-div-var">
                    <span className='pres-title-var'>Langues</span>
                    <ul className='centered-list'>
                        <li>Français</li>
                        <li>Anglais</li>
                        <li>Japonais</li>
                    </ul>
                </div>
                <div className="soft-div-var">
                    <span className='pres-title-var'>Passions</span>
                    <ul className='centered-list'>
                        <li>Sport</li>
                        <li>Lecture</li>
                        <li>Développer</li>
                    </ul>
              </div>
            </div>
          </div>
          <div className="cv-download-part">
            <img className="img-download-part" src={MoiSansBg} alt="" />
            <button className='button-download noise' onClick={handleDownload}>Télécharger mon CV</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechPres;
