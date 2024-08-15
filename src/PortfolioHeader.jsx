import './App.css';
import gtSeal from './img/gt-seal.png';
import gitLogo from './img/github-logo.png';
import linkedinLogo from './img/LinkedIn-Icon-Squircle-Dark.png';
import emailLogo from './img/email-icon.png';
import resumeLogo from './img/resume-icon.png';

const PortfolioHeader = () => {
  return(
    <div className="Port-header">
      <div className="Name-container">
        <img src={gtSeal} alt="gtLogo" className="App-logo"/>
        <p className="Name">
          Will Parrish
        </p>
        <div className="Introduction-container">
          <p className="Introduction">
            Computer Science
          </p>
          <p className="Introduction">
            3rd Year <span className="Georgia-tech">Georgia Institute of Technology</span>
          </p>
        </div>
        <div className="Header-links">
            <div className='Top-links'>
              <a href="https://www.linkedin.com/in/will-m-parrish/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="linkedinLogo" className='link-logo'/>will-m-parrish</a>
              <a href="https://github.com/willptci" target="_blank" rel="noopener noreferrer"><img src={gitLogo} alt="gitLogo" className='link-logo'/>willptci</a>
            </div>
            <div className="Bottom-links">
              <a href="mailto:your-email@example.com"><img src={emailLogo} alt="email_img" className='link-logo'/>Email</a>
              <a href="mailto:your-email@example.com"><img src={resumeLogo} alt="resume_img" className='link-logo'/>Resume</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioHeader;