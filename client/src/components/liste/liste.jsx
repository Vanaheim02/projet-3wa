import React from 'react';
import Categorie from './Categorie'; // En supposant que Categorie.jsx est dans le même répertoire
import "./liste.scss";

const Liste = ({ categories }) => {
  return (
    <div className="liste-categories">
      <h2>Catégories</h2>
      <ul>
        {categories.map((categorie) => (
          <li key={categorie.nom}>
            <Categorie key={categorie.nom} categorie={categorie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Liste;