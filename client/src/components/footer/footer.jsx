import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "./footer.scss";

const Footer = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-title">
          <a href="mailto:exemple@example.com">
            <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
          </a>
          &nbsp;
          &copy; 2023 | Calendrier des jeux vidéos
        </p>
      </div>
    </footer>
  );
};

export default Footer;