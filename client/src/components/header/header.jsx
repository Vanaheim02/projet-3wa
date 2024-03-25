import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <div>
        <h1 className="header-title">
          Calendrier des jeux vidéos
          <Link to="/signin" className="icon-link">
            {/* Vous pouvez ajouter une icône ici si vous le souhaitez */}
          </Link>
        </h1>
      </div>
      <div className={`burger-menu ${showNavbar ? 'active' : ''}`} onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className={showNavbar ? 'show-navbar' : ''}>
        <ul className='navbar'>
          <li><Link to="/about">A propos</Link></li>
          <li><Link to="/mylist">Ma liste</Link></li>
          <li><Link to="/calendar">Calendrier</Link></li>
          <li><Link to="/category">Catégorie</Link></li>
          <li><Link to="/plateform">Plateforme</Link></li>
          <li><Link to="/myaccount">Mon compte</Link></li>
          <li><Link to="/contact">Nous contacter</Link></li>
          <li><Link to="/sign-in">Nous contacter</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;