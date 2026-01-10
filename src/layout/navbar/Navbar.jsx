import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NavHashLink } from 'react-router-hash-link'; // On garde juste cet import
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

        {/* Liens de navigation - Utilisation de NavHashLink pour la compatibilité */}
        <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
          <li><NavHashLink smooth to="/#hero" onClick={() => setIsOpen(false)}>Accueil</NavHashLink></li>
          <li><NavHashLink smooth to="/#about" onClick={() => setIsOpen(false)}>À propos</NavHashLink></li>
          <li><NavHashLink smooth to="/#expertises" onClick={() => setIsOpen(false)}>Expertises</NavHashLink></li>
          <li><NavHashLink smooth to="/#projets" onClick={() => setIsOpen(false)}>Projets</NavHashLink></li>
          <li><NavHashLink smooth to="/#parcours" onClick={() => setIsOpen(false)}>Parcours</NavHashLink></li>
          <li><NavHashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>Contact</NavHashLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;