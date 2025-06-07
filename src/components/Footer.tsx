import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'; 
import logosynapseImage from '../assets/images/logosynapse1.png'; 

function Footer() {
  return (
    <footer>

      <div className="footer-logo-container">
    
        <img src={logosynapseImage} alt="Logo Synapse" className="footer-logo-center" />
      </div>

    
      <div className="footer-bottom-content">
      
        <div className="footer-social-icons">
          <a href="https://github.com/gersg" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/gersg/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </div>
        
        <p>© Synapse AI by Gerson Espindola</p>
      </div>
    </footer>
  );
}

export default Footer;