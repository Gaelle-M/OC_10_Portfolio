import React from 'react';
import './Footer.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2026 - Gaëlle Mazzali — Intégratrice Web & WordPress</p>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/ga%C3%ABlle-mazzali-53b003214/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Gaelle-M" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;