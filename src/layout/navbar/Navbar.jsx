import { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <ul className="navbar__links">
        <li><a href="/">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#expertises">Expertises</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#experience">Parcours</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;