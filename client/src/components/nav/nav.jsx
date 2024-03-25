import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./liste.scss";

const Nav = () => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push(`/games?search=${searchValue}`);
  };

  return (
    <nav>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Rechercher un jeu vidéo..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </form>
    </nav>
  );
};

export default Nav;