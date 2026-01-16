import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NavHashLink } from 'react-router-hash-link'; 
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__container">

        {/* Bouton Burger */}
        <button 
          className="navbar__burger" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Liens de navigation */}
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