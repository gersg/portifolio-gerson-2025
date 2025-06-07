import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'; 
import logotatuiImage from '../assets/images/tatuilogo.png'; 

function Footer() {
  return (
    <footer>

      <div className="footer-logo-container">
    
        <img src={logotatuiImage} alt="Logo Synapse" className="footer-logo-center" />
      </div>

    
      <div className="footer-bottom-content">
      
        <div className="footer-social-icons">
          <a href="https://github.com/gersg" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/gersg/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </div>
        
        <p>© Tatui Tech by Gerson Espindola</p>
      </div>
    </footer>
  );
}

export default Footer;