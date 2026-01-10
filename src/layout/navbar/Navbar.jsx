import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Assure-toi d'avoir react-icons installé
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__container">

        {/* Icône Burger */}
        <div className="navbar__burger" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Liens de navigation */}
        <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Accueil</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>À propos</a></li>
          <li><a href="#expertises" onClick={() => setIsOpen(false)}>Expertises</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projets</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;