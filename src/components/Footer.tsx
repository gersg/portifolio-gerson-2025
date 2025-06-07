import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'; 
import logo2headsImage from '../assets/images/logo2heads.png'; 

function Footer() {
  return (
    <footer>

      <div className="footer-logo-container">
    
        <img src={logo2headsImage} alt="Logo 2Heads" className="footer-logo-center" />
      </div>

    
      <div className="footer-bottom-content">
      
        <div className="footer-social-icons">
          <a href="https://github.com/gersg" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/gersg/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </div>
        
        <p>© 2heads - Gerson Espindola</p>
      </div>
    </footer>
  );
}

export default Footer;