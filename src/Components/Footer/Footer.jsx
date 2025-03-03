import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Designed & Built by Marcelo Amaral</p>
        <div className="footer-links">
          <a href="https://github.com/marcelovsk1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/marceloamaralalves/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="footer-copyright">© 2025 Marcelo Amaral. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;