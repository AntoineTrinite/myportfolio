import React from 'react';
import '../styles/TechPres.css';
import '../img/noise.png';
import MoiSansBg from '../img/Moi-sans-bg.png'

const TechPres = () => {

  const handleDownload = () => {
    const pdfFilePath = './files/CV2023.pdf';

    const downloadLink = document.createElement('a');
    downloadLink.href = pdfFilePath;
    downloadLink.download = 'cv_antoine_trinite.pdf';
    downloadLink.click();
  };

  return (
    <div className={`tech-pres`}>
      <h3 className='project-title'>Technologies _/</h3>
      <div className="technology">
        <div className="tech-card noise">
          <span className="tech-card-title">Html/Css</span>
          <p className="tech-card-description">
            9 Projects completed
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">Javascript</span>
          <p className="tech-card-description">
            3 Projects completed
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">PHP</span>
          <p className="tech-card-description">
            1 Project completed<br />1 project in progress
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">Laravel</span>
          <p className="tech-card-description">
            1 project in progress
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">React</span>
          <p className="tech-card-description">
            2 Projects completed
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">NodeJs</span>
          <p className="tech-card-description">
            1 Project completed
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">MongoDB</span>
          <p className="tech-card-description">
            1 Project completed
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">MySQL</span>
          <p className="tech-card-description">
            1 Project in progress
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">Python</span>
          <p className="tech-card-description">
            1 Project in progress
          </p>
        </div>
        <div className="tech-card noise">
          <span className="tech-card-title">Figma</span>
          <p className="tech-card-description">
            3 Projects completed<br />1 projects in progress
          </p>
        </div>
      </div>

      <h3 className='project-title'>Presentation _/</h3>
      <div className="presentation">
        <div className="pres-main noise">
          <div className="pres-first-part">
            <span className='pres-title'>Who am i ?</span>
            <p className='pres-text'>
              I'm passionate about dev and Japan. Following a degree in Japanese and a one-year trip to Japan.
              I decided to become a web developer with the aim of creating websites and applications in French and Japanese.
              My dream is to be able to help both sides get to know each other better and create connections between the two countries.
            </p>
            <span className='pres-title'>My soft skills</span>
            <div className="soft-div">
              <ul className='soft-ul'>
                <li className='soft-li'>Curious</li>
                <li className='soft-li'>Autonomous</li>
              </ul>
              <ul className='soft-ul'>
                <li className='soft-li'>Creative</li>
                <li className='soft-li'>flexible</li>
              </ul>
            </div>
          </div>
          <div className="pers-inter-part"></div>
          <div className="pres-second-part">
            <div className="soft-div-var">
              <span className='pres-title-var'>Languages</span>
              <ul className='centered-list'>
                <li>French</li>
                <li>English</li>
                <li>Japanese</li>
              </ul>
            </div>
            <div className="soft-div-var">
              <span className='pres-title-var'>Hobbies</span>
              <ul className='centered-list'>
                <li>Sport</li>
                <li>Reading</li>
                <li>development</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cv-download-part">
          <img className="img-download-part" src={MoiSansBg} alt="Author of this website" />
          <button className='button-download noise' onClick={handleDownload}>Download my CV</button>
        </div>
      </div>
    </div>
  );
};

export default TechPres;
